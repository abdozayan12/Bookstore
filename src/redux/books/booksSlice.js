import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: [
      {
        item_id: 'item1',
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        category: 'Action',
      },
      {
        item_id: 'item2',
        title: 'Dune',
        author: 'Frank Herbert',
        category: 'Science Fiction',
      },
      {
        item_id: 'item3',
        title: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
        category: 'Economy',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteBook: (state, action) => {
      state.value = state.value.filter((curr) => curr.item_id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
