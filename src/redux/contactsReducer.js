import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
} from './thunk';

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  token: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const stateArr = [registerThunk, loginThunk, logoutThunk, refreshUserThunk];

const handler = status => {
  return stateArr.map(item => item[status]);
};

const contactsSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addMatcher(isAnyOf(...handler('rejected')), handleRejected)
      .addMatcher(isAnyOf(...handler('pending')), handlePending),
});

export const contactsReducer = contactsSlice.reducer;
