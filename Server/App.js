const express = require('express');
// const fileupload = require("express-fileupload");
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
// const multer = require('multer');
const cors = require('cors');

const connectDB = require('./database/connection')

const app = express();
dotenv.config({path:'config.env'});
const PORT = 5000;


const route = require('./routes/router')


//log request
app.use(morgan('tiny'));
app.use(express.json());

//mongodb
connectDB();

//pass request to body parser
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('uploads'));

//cors middleware
app.use(cors());
app.use(express.json());

//load routers

app.use('/',route);

//listening app on port 8080 if we dont have .env file
app.listen(PORT,()=>{
    console.log(`App listen on port http://localhost:${PORT}`)
})
