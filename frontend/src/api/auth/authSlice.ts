import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from '../../models/client';

interface AuthState {
  user: IUser;
  token: string | null;
  isAuth: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: {} as IUser,
  token: localStorage.getItem('token'),
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: IUser; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.user = {} as IUser;
      state.token = null;
      state.isAuth = false;
      localStorage.removeItem('token');
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCredentials, logout, setLoading } = authSlice.actions;
export const authReducer = authSlice.reducer;
