import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    image: String,
    title: String,
    price: Number,
    author: String
})

const Book = mongoose.model("book", bookSchema);
export default Book;