import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Mac019:9322759443@cluster0.szgiyzu.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}