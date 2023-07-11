import React, { useState } from 'react';

function BookList() {
  const [bookList, setBookList] = useState({
    item1: [
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        category: 'Fiction',
      },
    ],
    item2: [
      {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        category: 'Fiction',
      },
    ],
    item3: [
      {
        title: 'Frankenstein ',
        author: 'Mary Shelley',
        category: 'Fiction',
      },
    ],
    item4: [
      {
        title: 'The Great Gatsby ',
        author: 'F. Scott Fitzgerald',
        category: 'Fiction',
      },
    ],
  });

  const deleteBookList = (book) => {
    const newItems = { ...bookList };
    delete newItems[book]; 
    setBookList(newItems);
  };

  return (
    <div className="book-container">
      {Object.keys(bookList).map((book) => (
        <div className="book-card" key={book}>
          <div className="book-category">
            {bookList[book][0].category}
          </div>
          <div className="book-title">
            {bookList[book][0].title}
          </div>
          <div className="book-author">
            {bookList[book][0].author}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              deleteBookList(book);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default BookList;
