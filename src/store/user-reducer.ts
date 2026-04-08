import { createAction, createReducer } from '@reduxjs/toolkit';
import { Authorization, AuthStatus } from '../constants/constants';
import { UserInfo } from '../types/user.type';

export type UserState = {
  authorizationStatus: AuthStatus;
  userInfo: UserInfo | null;
};

const initialState: UserState = {
  authorizationStatus: Authorization.Unknown,
  userInfo: null,
};

export const setAuthorizationStatus = createAction<AuthStatus>('user/setAuthorizationStatus');
export const setUserInfo = createAction<UserInfo | null>('user/setUserInfo');

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});
