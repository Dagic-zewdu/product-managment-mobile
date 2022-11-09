import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  user: [],
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});
const userReducer = userSlice.reducer;
export default userReducer;
