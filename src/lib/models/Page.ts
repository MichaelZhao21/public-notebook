import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema(
    {
        folder: String,
        slug: String,
        name: String,
        tags: [String],
        content: String,
        lastEdit: Number,
    },
    { collection: 'pages' },
);

const Page = mongoose.model('Page', pageSchema);

export default Page;
