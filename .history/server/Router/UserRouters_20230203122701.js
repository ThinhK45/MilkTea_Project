import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../Models/UserModel.js';

const userRoute = express.Router();

// Login
userRoute.get(
    '/',
    asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })
);

export default userRoute;
