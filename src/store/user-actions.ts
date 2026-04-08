import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Authorization } from '../constants/constants';
import { setAuthorizationStatus, setUserInfo } from './user-reducer';
import { UserInfo } from '../types/user.type';
import { saveToken, removeToken } from '../services/token';

type LoginData = {
  email: string;
  password: string;
};

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_, { dispatch, extra: api }) => {
  try {
    const response = await api.get<UserInfo>('/login');
    dispatch(setUserInfo(response.data));
    dispatch(setAuthorizationStatus(Authorization.Auth));
  } catch {
    dispatch(setAuthorizationStatus(Authorization.NoAuth));
  }
});

export const login = createAsyncThunk<
  void,
  LoginData,
  {
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const response = await api.post<UserInfo>('/login', { email, password });
  saveToken(response.data.token);
  dispatch(setUserInfo(response.data));
  dispatch(setAuthorizationStatus(Authorization.Auth));
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    extra: AxiosInstance;
  }
>('user/logout', async (_, { dispatch, extra: api }) => {
  await api.delete('/logout');
  removeToken();
  dispatch(setAuthorizationStatus(Authorization.NoAuth));
});
