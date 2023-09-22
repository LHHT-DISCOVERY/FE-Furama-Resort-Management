import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../../model/account";

const AUTH_API = "http://localhost:8080/api/public/login"
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
// 0. tạo service call API cho module security
export class SecurityService {

  constructor(private httpClient: HttpClient) {
  }

  login(obj: Account): Observable<any> {
    return this.httpClient.post(AUTH_API, {
      // username và password đúng với body ở postman
      // đúng nếu ko sảy ra 403
      username: obj.accountName,
      password: obj.password
    }, httpOptions)
  }
}
