import React from 'react';
import BookList from '../components/BookList';
import AddNewBook from '../components/AddNewBook';

function BookPage() {
  return (
    <main className="page">
      <BookList />
      <AddNewBook />
    </main>
  );
}

export default BookPage;
