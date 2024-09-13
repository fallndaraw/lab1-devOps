const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Route for creating a new book
router.post("/", bookController.createBook);

// Route for retrieving all books
router.get("/", bookController.getBooks);

// Route for retrieving a single book by ID
router.get("/:id", bookController.getBookById);

// Route for updating a book by ID
router.put("/:id", bookController.updateBook);

// Route for deleting a book by ID
router.delete("/:id", bookController.deleteBook);

module.exports = router;