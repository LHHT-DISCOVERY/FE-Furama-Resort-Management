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
export class SecurityService {

  constructor(private httpClient: HttpClient) {
  }

  login(obj: Account): Observable<any> {
    return this.httpClient.post(AUTH_API, {
      userName: obj.accountName,
      password: obj.password
    }, httpOptions)
  }
}
