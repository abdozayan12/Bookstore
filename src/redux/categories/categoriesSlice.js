import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    value: '',
  },
  reducers: {
    checkstatus: (state) => {
      if (state.value === '') return 'Under construction';
      return null;
    },
  },
});

export const { checkstatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
