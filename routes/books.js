var express = require('express');
var router = express.Router();

// create a link to our drink model
var booksController = require('../controllers/booksController');

// index (http://my-app.com/books)
router.get( '/', booksController.index );

// new (http://my-app.com/books/new)
router.get( '/new', booksController.new );

// create (http://my-app.com/books)
router.post( '/', booksController.create );

// makes our file public to the application
module.exports = router;
