import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY: string = 'access_token';
  private readonly EXPIRY_KEY: string = 'token_expiry';
  private readonly USER_INFO_KEY: string = 'user_info';

  private accessToken: string | null = null;
  private userInfo: any = null;

  getAuthData() {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const expiryTime = localStorage.getItem(this.EXPIRY_KEY);
    const userInfo = localStorage.getItem(this.USER_INFO_KEY);

    if (token && expiryTime) {
      if (this.isTokenExpired(parseInt(expiryTime))) {
        this.clearAuthData();
        return { token: null, isExpired: true };
      }
      return {
        token,
        isExpired: false,
        userInfo: JSON.parse(userInfo || '{}'),
      };
    }
    return {
      token: this.accessToken,
      userInfo: this.userInfo,
      isExpired: false,
    };
  }

  constructor() { }

  // Store token and user info in memory
  storeAuthData(token: string, userInfo: any) {
    this.accessToken = token;
    this.userInfo = userInfo;

    const expiryTime = new Date().getTime() + 3600 * 1000; // expiresIn is in seconds
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.EXPIRY_KEY, expiryTime.toString());
    localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(userInfo));
  }

  private isTokenExpired(expiryTime: number): boolean {
    return new Date().getTime() > expiryTime;
  }
  clearAuthData() {
    this.accessToken = null;
    this.userInfo = null;
  }
}
