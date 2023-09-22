import {Injectable} from '@angular/core';

// lấy giá trị tu session storage , F12
const TOKEN_KEY = 'auth-token';

// lấy giá trị từ local storage , F12
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

//1. tạo class tương tac vs token
export class TokenStorageService {

  constructor() {
  }

  singOut() {
    window.localStorage.clear();
    window.sessionStorage.clear()
  }

  public saveTokenLocal(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token)
  }

  public saveTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string {
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      //   sử dụng toán tử  || và thêm một chuỗi vào nó để nó không còn null nữa
      return (localStorage.getItem(TOKEN_KEY) || "");
    } else {
      return (sessionStorage.getItem(TOKEN_KEY) || "");
    }
  }

  public saveUserLocal(user: any) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    if (window.localStorage.getItem(USER_KEY) !== null) {
      //   sử dụng toán tử  || và thêm một chuỗi vào nó để nó không còn null nữa
      return JSON.parse(localStorage.getItem(USER_KEY) || "");
    } else {
      return JSON.parse(sessionStorage.getItem(USER_KEY) || "");
    }
  }

  public isLogin(): boolean {
    return !(window.sessionStorage.getItem(TOKEN_KEY) == null && window.localStorage.getItem(USER_KEY) == null)
  }
}
