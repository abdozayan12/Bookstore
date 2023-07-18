import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookCallAPI } from '../redux/books/booksSlice';

function BookCard({ book }) {
  const dispatch = useDispatch();

  const deleteBookList = (id) => {
    dispatch(deleteBookCallAPI({ item_id: id }));
  };

  const randomProgress = Math.round(Math.random() * 100);
  const randomChapter = Math.round(Math.random() * 20 + 1);

  return (
    <div className="book-card" key={book.item_id}>
      <div className="book-card-left-container">
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
        <div className="book-category">{book.category}</div>
        <div className="book-card-button-container">
          <button type="button">
            Comments
          </button>
          <div className="vertical-divider" />
          <button
            key={book.item_id}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              deleteBookList(book.item_id);
            }}
          >
            Remove
          </button>
          <div className="vertical-divider" />
          <button type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="book-card-right-container">
        <div className="book-progressbar">
          <CircularProgressbar
            value={randomProgress}
            styles={{
              trail: {
                stroke: '#d6d6d6',
                strokeLinecap: 'butt',
                transformOrigin: 'center center',
              },
              path: {
                stroke: '#0290ff',
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transformOrigin: 'center center',
              },
            }}
          />
        </div>
        <div className="Percent">
          {`${randomProgress}%`}
          <div className="complete">Completed</div>
        </div>
        <div className="vertical-divider" />
        <div>
          <div className="currentCh">CURRENT CHAPTER</div>
          <div className="randomCh">{`Chapter ${randomChapter}`}</div>
          <button className="book-update-progress-button" type="button">
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BookCard;
