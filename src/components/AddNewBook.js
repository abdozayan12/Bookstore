import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function AddNewBookForm() {
  const dispatch = useDispatch();
  const initialState = { title: '', category: '', author: '' };
  const [newBook, setNewBook] = useState(initialState);

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3>ADD NEW BOOK</h3>
        <form className="form">
          <input
            placeholder="Book title"
            onChange={(e) => {
              setNewBook({ ...newBook, title: e.target.value });
            }}
            value={newBook.title}
          />
          <select
            name="Author"
            onChange={(e) => {
              setNewBook({ ...newBook, author: e.target.value });
            }}
            value={newBook.author}
          >
            <option value="" defaultValue="Author" disabled>
              Author
            </option>
            <option value="Suzanne Collins">Suzanne Collins</option>
            <option value="Ray Bradbury">Ray Bradbury</option>
            <option value="Frank Herbert">Frank Herbert</option>
            <option value="Mary Shelley">Mary Shelley</option>
          </select>
          <select
            name="Category"
            onChange={(e) => {
              setNewBook({ ...newBook, category: e.target.value });
            }}
            value={newBook.category}
          >
            <option value="" defaultValue="Category" disabled>
              Category
            </option>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (newBook.author && newBook.title && newBook.category) {
                dispatch(addBook({ item_id: uuid(), ...newBook }));
                setNewBook(initialState);
              }
            }}
          >
            ADD BOOK
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddNewBookForm;
