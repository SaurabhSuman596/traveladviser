import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name: 'map',
  initialState: {
    label: '',
    data: [],
  },
  reducers: {
    getData: (state, action) => {
      state.label = action.payload.label;
      state.data = action.payload.data;
      state.latlng = action.payload.latlng;
    },
  },
});

export const { getData } = mapSlice.actions;

export default mapSlice.reducer;
