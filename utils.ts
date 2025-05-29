import mongoose from "mongoose";
export const Connect = async() => {
    if (mongoose.connection.readyState >= 1) return;
    mongoose.connect(process.env.MONGODB_ACCESS!);
}