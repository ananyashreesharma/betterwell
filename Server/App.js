const express = require('express');
// const fileupload = require("express-fileupload");
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
// const multer = require('multer');
const cors = require('cors');

const { initDatabase } = require('./database/sqlite')

const app = express();
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 5002;

const route = require('./routes/router')

// Initialize database
initDatabase().then(() => {
    console.log('✅ Database ready');
}).catch(err => {
    console.log('❌ Database initialization failed:', err);
});

//log request
app.use(morgan('tiny'));
app.use(express.json());

//pass request to body parser
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('uploads'));

//cors middleware - updated for production
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? [process.env.FRONTEND_URL || 'https://your-vercel-app.vercel.app'] 
        : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));
app.use(express.json());

//load routers
app.use('/api',route);

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

//listening app on port
app.listen(PORT,()=>{
    console.log(`🚀 App listen on port http://localhost:${PORT}`)
})

module.exports = app;
