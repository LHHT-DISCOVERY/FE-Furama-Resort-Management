import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token)
  }

  public saveTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string {
    if (window.localStorage.getItem(TOKEN_KEY) !== null) {
      return window.localStorage.getItem(TOKEN_KEY);
    } else {
      return window.sessionStorage.getItem(TOKEN_KEY);
    }
  }

  public saveUserLocal(user: any) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    if (window.localStorage.getItem(USER_KEY) !== null) {
      return JSON.parse(localStorage.getItem(USER_KEY));
    } else {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
  }

  public isLogin(): boolean {
    return !(window.sessionStorage.getItem(TOKEN_KEY) == null && window.localStorage.getItem(USER_KEY) == null)
  }
}
