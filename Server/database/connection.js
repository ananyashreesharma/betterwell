const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log(`✅ Database connected: ${con.connection.host}`)
        
    }catch(err){
        console.log('❌ Database connection error:', err.message)
        console.log('🔧 Please check your internet connection and MongoDB Atlas settings')
        process.exit(1)
    }
}

module.exports = connectDB