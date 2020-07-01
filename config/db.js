const mongoose = require("mongoose")

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MOGNO_URI, {
            useNewUrlParser = true,
            useUnifiedTopology = true,
            useFindAndModify = false
        })      
        console.log(`Connected database, ${conn.connection.host}`)
    } catch (err){
        console.error(err)
        process.exit(1) // If smt goes wrong, stop the process
    }   

    }

  
module.exports = connectMongoDB;