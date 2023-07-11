import React from 'react';

function AddNewBook() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3>ADD NEW BOOK</h3>
        <form className="form">
          <input placeholder="Book title" />
          <select id="cars" name="Author">
            <option value="default" disabled>
              Author
            </option>
            <option value="J.R.R. Tolkien">J.R.R. Tolkien</option>
            <option value="Ray Bradbury">Ray Bradbury</option>
            <option value="J. K. Rowling">J. K. Rowling</option>
            <option value="Mary Shelley">Mary Shelley</option>
          </select>
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default AddNewBook;
