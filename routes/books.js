const express = require('express')
const Author = require('../models/author')
const router = express.Router()
const Book = require('../models/book')

// All Books Route
router.get('/', async (req, res) => {
    res.send('All Books')
})

// New Book Route
router.get('/new', async (req, res) => {
    try {
        const authors = await Author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: authors,
            book: book
        })
    } catch {
        res.redirect('/books')
    }
})

// Create Books Route
router.post('/', async (req, res) => {
    res.send('Create Book')
})

module.exports = router