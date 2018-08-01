var mongoose = require( 'mongoose' );

// all model classes will inherit from
// the mongoose.Schema class

var bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please enter a book title.'
  },
  author: {
    type: String,
    required: 'Please enter the authors name.'
  },
  NumberOfCopies: {
    type: Number,
    required: 'Please enter number of copies.'
  }
});

// make this class public
module.exports = mongoose.model( 'book', bookSchema );
