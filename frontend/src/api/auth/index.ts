// src/features/auth/api/index.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQuery';
import { setCredentials, logout } from './authSlice';
import type { GetAuthResponse } from '../../models/auth/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<
      GetAuthResponse,
      { email: string; password: string }
    >({
      query: (creds) => ({ url: '/login', method: 'POST', body: creds }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setCredentials({ user: data.user, token: data.accessToken }),
          );
        } catch (error) {
          console.error('Login failed:', error);
          dispatch(logout());
        }
      },
    }),
    registration: builder.mutation<
      GetAuthResponse,
      { email: string; password: string }
    >({
      query: (creds) => ({ url: '/registration', method: 'POST', body: creds }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setCredentials({ user: data.user, token: data.accessToken }),
          );
        } catch {}
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({ url: '/logout', method: 'POST' }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch {}
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation } =
  authApi;
