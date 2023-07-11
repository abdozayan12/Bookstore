import React, { useState } from 'react';

function BookList() {
  const [bookList, setBookList] = useState({
    item1: [
      {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        category: 'Action',
      },
    ],
    item2: [
      {
        title: 'Dune',
        author: 'Frank Herbert',
        category: 'Science Fiction',
      },
    ],
    item3: [
      {
        title: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
        category: 'Economy',
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
            Remove
          </button>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default BookList;
