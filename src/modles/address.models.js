const mongoose=require("mongoose");

const AddressSchema=mongoose.Schema({

    firstName:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    streetAddress:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zipcode:{
        type:Number,
        required:true,
    },
    user:{
        type:mongoose.schema.objectID,
        ref:"users",
    },
    mobile:{
        type:String,
        required:true,
    },
})

const Address=mongoose.model("addresses",AddressSchema);

module.exports=Address;