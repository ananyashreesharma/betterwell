const express = require('express')
const route = express.Router();
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../database/sqlite');

// JWT secret - in production, use environment variable
const JWT_SECRET = 'secret123';

route.get('/',(req,res)=>{
    res.json({message: "BetterWellness API is running", status: "success"})
})

// Test route for debugging
route.get('/test',(req,res)=>{
    res.json({message: "API connection successful", timestamp: new Date().toISOString()})
})

//REGISTER ROUTE
route.post('/register', async (req,res)=>{
    console.log('Registration attempt:', req.body);
    
    if(!req.body){
        return res.status(400).json({message: "Content cannot be empty"});
    }
    
    // Validate required fields
    if(!req.body.name || !req.body.email || !req.body.phone || !req.body.password) {
        return res.status(400).json({message: "All fields are required"});
    }
    
    try{
        // Check if user already exists
        db.get("SELECT * FROM users WHERE email = ?", [req.body.email], async (err, existingUser) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({message: "Server error. Please try again."});
            }
            
            if(existingUser) {
                return res.status(400).json({message: "User with this email already exists"});
            }
            
            // Hash the password
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            
            // Insert new user
            db.run("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)", 
                [req.body.name, req.body.email, req.body.phone, hashedPassword], 
                function(err) {
                    if (err) {
                        console.error('Insert error:', err);
                        return res.status(500).json({message: "Server error. Please try again."});
                    }
                    
                    // Return success response
                    res.status(201).json({
                        message: "Registration successful",
                        user: {
                            id: this.lastID,
                            name: req.body.name,
                            email: req.body.email,
                            phone: req.body.phone
                        }
                    });
                }
            );
        });
        
    } catch(error) {
        console.error('Registration error:', error);
        res.status(500).json({message: "Server error. Please try again."});
    }
})

//LOGIN ROUTE
route.post('/login', async (req, res)=>{
    try {
        db.get("SELECT * FROM users WHERE email = ?", [req.body.email], async (err, user) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({message: 'Server error'});
            }
            
            if(!user) {
                return res.status(401).json({message: 'Invalid credentials'});
            }
            
            // Check password
            const isValidPassword = await bcrypt.compare(req.body.password, user.password);
            
            if(!isValidPassword) {
                return res.status(401).json({message: 'Invalid credentials'});
            }
            
            const token = jwt.sign({
                name: user.name,
                email: user.email,
                id: user.id
            }, JWT_SECRET);
            
            return res.json({
                status: 'ok', 
                user: {
                    name: user.name,
                    email: user.email,
                    id: user.id
                },
                token: token
            });
        });
        
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({message: 'Server error'});
    }
})

route.put('/api/users/:id',(req,res)=>{
    
    const id = req.params.id;
    db.get("SELECT * FROM users WHERE id = ?", [id], (err, user) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({message: "Error fetching user"});
        }
        
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }
        
        db.run("UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?", 
            [req.body.name, req.body.email, req.body.phone, id], 
            function(err) {
                if (err) {
                    console.error('Update error:', err);
                    return res.status(500).json({message: "Error updating user"});
                }
                
                res.json({
                    message: "User updated successfully",
                    user: {
                        id: id,
                        name: req.body.name,
                        email: req.body.email,
                        phone: req.body.phone
                    }
                });
            }
        );
    });
})

route.delete('/api/users/:id',(req,res)=>{
    const id = req.params.id;

    db.get("SELECT * FROM users WHERE id = ?", [id], (err, user) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({message: "Error fetching user"});
        }
        
        if(!user) {
            return res.status(404).json({message: "User not found"});
        }
        
        db.run("DELETE FROM users WHERE id = ?", [id], (err) => {
            if (err) {
                console.error('Delete error:', err);
                return res.status(500).json({message: "Error deleting user"});
            }
            
            res.json({
                message: "User deleted successfully"
            });
        });
    });
})

/************************************BLOGS ROUTES******************************************/
route.post('/blogs', async (req, res)=>{
    if(!req.body){
        res.status(400).send({message:"content not be empty"});
        return;
    }
    console.log(req.body);

    try{
        db.run("INSERT INTO blogs (title, description, username) VALUES (?, ?, ?)", 
            [req.body.title, req.body.description, req.body.username], 
            function(err) {
                if (err) {
                    console.error('Blog insert error:', err);
                    return res.status(500).json({message: "Some Error Occurred! try again"});
                }
                
                res.json({
                    id: this.lastID,
                    title: req.body.title,
                    description: req.body.description,
                    username: req.body.username,
                    created_at: new Date().toISOString()
                });
            }
        );
    }catch(error){
        res.json({status:'error'});
    }
})

route.get('/blogs',(req,res)=>{
    db.all("SELECT * FROM blogs ORDER BY created_at DESC", (err, blogs) => {
        if (err) {
            console.error('Blog fetch error:', err);
            return res.status(500).json({message: "Error fetching blogs"});
        }
        res.json(blogs);
    });
})

// Doctor routes - returning sample data for now
route.get('/anxdoc',(req,res)=>{
    res.json([
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialization: "Anxiety Disorders",
            location: "New York, NY",
            phone: "+1-555-0123",
            email: "dr.johnson@example.com",
            rating: 4.8
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            specialization: "General Anxiety",
            location: "Los Angeles, CA",
            phone: "+1-555-0124",
            email: "dr.chen@example.com",
            rating: 4.6
        }
    ]);
})

route.get('/bidoc',(req,res)=>{
    res.json([
        {
            id: 1,
            name: "Dr. Emily Rodriguez",
            specialization: "Bipolar Disorder",
            location: "Chicago, IL",
            phone: "+1-555-0125",
            email: "dr.rodriguez@example.com",
            rating: 4.9
        }
    ]);
})

route.get('/depdoc',(req,res)=>{
    res.json([
        {
            id: 1,
            name: "Dr. James Wilson",
            specialization: "Depression",
            location: "Boston, MA",
            phone: "+1-555-0126",
            email: "dr.wilson@example.com",
            rating: 4.7
        }
    ]);
})

route.get('/ocddoc',(req,res)=>{
    res.json([
        {
            id: 1,
            name: "Dr. Lisa Thompson",
            specialization: "OCD Specialist",
            location: "Seattle, WA",
            phone: "+1-555-0127",
            email: "dr.thompson@example.com",
            rating: 4.5
        }
    ]);
})

route.get("/view-blog/:id", async (req, res)=>{
    const id = req.params.id;
    console.log(id)
    let blog;
    try {
        db.get("SELECT * FROM blogs WHERE id = ?", [id], (err, row) => {
            if (err) {
                console.error('Blog fetch error:', err);
                return res.status(500).json({message: "Error fetching blog"});
            }
            
            if(!row) {
                return res.status(404).json({message: "No blog Found"});
            }
            
            blog = row;
            res.status(200).json({blog});
        });
    } catch (error) {
        console.log(error)
    }
})

module.exports = route