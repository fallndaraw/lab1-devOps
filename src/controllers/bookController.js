const Book = require("../models/book");

// Create a new book
exports.createBook = async (req, res) => {
  const { title, author, description, published_year, genre, price } = req.body;
  try {
    const book = await Book.create({ title, author, description, published_year, genre, price });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books", error });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving book", error });
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, description, published_year, genre, price } = req.body;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      book.title = title || book.title;
      book.author = author || book.author;
      book.description = description || book.description;
      book.published_year = published_year || book.published_year;
      book.genre = genre || book.genre;
      book.price = price || book.price;
      await book.save();
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (book) {
      await book.destroy();
      res.status(204).json({ message: "Book deleted" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};