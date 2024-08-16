require ('dotenv')
const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connect to the database');
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = dbConnect