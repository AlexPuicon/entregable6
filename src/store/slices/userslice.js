import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
