const  mongoose = require("mongoose")

const mondbUrl="mongodb+srv://rasikasuryawanshi:hhs8gJIJFOugJc6Z@cluster0.n6brvq7.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}      