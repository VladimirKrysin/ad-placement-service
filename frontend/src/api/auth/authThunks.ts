import { authApi } from './index';
import { setCredentials, logout } from './authSlice';
import type { AppDispatch } from '../../stores/store';

export const loginUser =
  (credentials: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await dispatch(
        authApi.endpoints.login.initiate(credentials),
      ).unwrap();
      dispatch(
        setCredentials({ user: response.user, token: response.accessToken }),
      );
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

export const registerUser =
  (credentials: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await dispatch(
        authApi.endpoints.registration.initiate(credentials),
      ).unwrap();
      dispatch(
        setCredentials({ user: response.user, token: response.accessToken }),
      );
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    await dispatch(authApi.endpoints.logout.initiate()).unwrap();
    dispatch(logout());
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
