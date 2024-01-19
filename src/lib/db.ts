import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

export async function connect() {
    await mongoose.connect(MONGO_URL);
    mongoose.connection.useDb('book');
}
