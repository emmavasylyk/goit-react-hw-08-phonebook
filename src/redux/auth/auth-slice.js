import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth-reduce';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      },
    );

    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      },
    );

    builder.addMatcher(
      authApi.endpoints.logoutUser.matchFulfilled,
      (state, _) => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
      },
    );

    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      },
    );
  },
});

export default authSlice;
