import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    pages: Number,
    publishedYear: Number,
});

export default mongoose.model("book", bookSchema);
