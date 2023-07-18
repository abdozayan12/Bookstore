import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'neyXQW3tfYEMZKybpBtX';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`;

export const fetchBook = createAsyncThunk('books/fetchBooks', () => axios.get(URL).then((res) => res.data));

export const addNewBookCallAPI = createAsyncThunk('books/addNewBook', async (newBook) => {
  const response = await axios.post(URL, newBook);
  return { newBook, response };
});

export const deleteBookCallAPI = createAsyncThunk('books/deleteBook', async (bookId) => {
  const response = await axios.delete(`${URL}/${bookId.item_id}`, bookId);
  return { bookId, response: response.data };
});

const initialState = {
  status: 'idle',
  value: [],
  error: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.status = 'completed';
        const data = Object.keys(action.payload).map((item) => {
          const book = {};
          book.author = action.payload[item][0].author;
          book.category = action.payload[item][0].category;
          book.title = action.payload[item][0].title;
          book.item_id = item;
          return book;
        });
        state.value = data;
        state.error = '';
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload.message;
      });
    builder
      .addCase(addNewBookCallAPI.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewBookCallAPI.fulfilled, (state, action) => {
        state.status = 'completed';
        state.error = '';
        state.value.push(action.payload.newBook);
      })
      .addCase(addNewBookCallAPI.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
    builder
      .addCase(deleteBookCallAPI.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBookCallAPI.fulfilled, (state, action) => {
        state.status = 'completed';
        state.error = '';
        state.value = state.value.filter((curr) => curr.item_id !== action.payload.bookId.item_id);
      })
      .addCase(deleteBookCallAPI.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});
export default booksSlice.reducer;
