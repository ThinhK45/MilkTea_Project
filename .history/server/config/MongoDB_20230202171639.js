import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            userNewUrlParser: true,
        });
        console.log('Mongo connected');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDatabase;
