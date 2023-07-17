import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';

function BookList() {
  const bookList = useSelector((state) => state.books.value);

  return (
    <div className="book-container" key="book-container">
      {bookList.map((book) => (
        <BookCard book={book} key={book.item_id} />
      ))}
      <hr />
    </div>
  );
}
export default BookList;
