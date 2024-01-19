import mongoose from 'mongoose';

const folderSchema = new mongoose.Schema(
    {
        slug: String,
        pages: {
            pageId: String,
            slug: String,
            name: String,
            tags: [String],
            lastEdit: Number,
        },
        lastEdit: Number,
    },
    { collection: 'folders' },
);

const Folder = mongoose.model('Folder', folderSchema);

export default Folder;
