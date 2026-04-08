import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { appReducer } from './reducer';
import { userReducer } from './user-reducer';

const api = createAPI();

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
