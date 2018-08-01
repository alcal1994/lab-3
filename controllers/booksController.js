var book = require( '../models/book' );

/* VIEWS */
// Index
exports.index = function( req, res, next ) {
  // create our locals parameter
  let locals = {
    title: 'books List'
  }

  book.find()
  .then( function ( books ) {
    // add the books to our locals
    locals.books = books;

    // render our view
    res.render( 'books/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
}

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Book'
  };

  res.render( 'books/new', locals )
};

/* ACTIONS */
// Create
exports.create = function ( req, res, next ) {
  book.create({
    title: req.body.title,
    author: req.body.author,
    NumberOfCopies: req.body.NumberOfCopies,
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
};
