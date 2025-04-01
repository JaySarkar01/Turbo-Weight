import mongoose from 'mongoose'

const contactSchema= mongoose.Schema({
    mobileNumber:{
        type:String,
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    }
})

const Contact= mongoose.model.contact_field ||  mongoose.model("contact_field", contactSchema);

export default Contact