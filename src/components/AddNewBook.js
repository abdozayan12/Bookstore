import React from 'react';

function AddNewBook() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3>ADD NEW BOOK</h3>
        <form className="form">
          <input placeholder="Book title" />
          <select id="cars" name="CATEGORIES">
            <option value="default" disabled>
              CATEGORIES
            </option>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default AddNewBook;
