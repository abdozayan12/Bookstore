import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

function BookCard({ book }) {
  const dispatch = useDispatch();

  const deleteBookList = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="book-card" key={book.item_id}>
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
      <div className="book-category">{book.category}</div>
      <button
        key={book.item_id}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          deleteBookList(book.item_id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BookCard;
