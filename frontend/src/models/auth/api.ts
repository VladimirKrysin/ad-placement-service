import type { IUser } from '../client';

interface GetAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export type { GetAuthResponse };
