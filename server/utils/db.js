const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin"; 
// mongoose.connect(URI)   

const URI = process.env.MONGODB_URI;
// const URI = "mongodb+srv://ayush:Ayush%40123@cluster0.kserhop.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"; 
   
const connectDb = async () => {   
    try {
        await mongoose.connect(URI)  
        console.log("Connection successfully")
    } catch (error) { 
        console.error("Database Connection failed");
        process.exit(0) 
    }
} 

module.exports = connectDb; 