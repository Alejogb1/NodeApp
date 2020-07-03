const mongoose = require("mongoose")
const env = String(process.env.MOGNO_URI);

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://alejogb:admin@cluster0.pf2wh.mongodb.net/<nodeapp>?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })      
        console.log(`Connected database, ${conn.connection.host}`)  
    } catch (err){
        console.log("Fail")
        console.error(err)
        process.exit(1) // If smt goes wrong, stop the process
    }   

    }

  
module.exports = connectMongoDB;