import express from "express";
const app = express();
import Book from "../model/book.js";
const router = express.Router();
//get all
router.get("/", async (req, res) => {
    try {
        const data = await Book.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Book not found" });
    }
});
//get one
router.get("/:id", async (req, res) => {
    try {
        const data = await Book.findOne({ _id: req.params.id });
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: "Book not found" });
    }
});
//add one
router.post("/", async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
        publishedYear: req.body.publishedYear,
    });
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: "Book not saved Internal error" });
    }
});
// //update one
// router.put("/:id", (req, res)=>{

// });
// //change one
// router.patch("/:id", (req, res)=>{

// });
// //delete one
// router.delete("/:id", (req, res)=>{

// });

export default router;
