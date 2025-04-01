import mongoose from "mongoose";

const sliderSchema= mongoose.Schema({
    image:{
        type:String,
        required:true
    }
})

const Slider= mongoose.models.slider || mongoose.model("slider", sliderSchema);
export default Slider;