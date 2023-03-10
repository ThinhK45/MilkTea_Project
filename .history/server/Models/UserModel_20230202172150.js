import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
        unique: true,
    },
    password: {
        type: "string",
        required: true
    }
})