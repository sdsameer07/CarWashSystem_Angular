import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Models/Login/Login';
import { LoginDto } from '../Models/Login/LoginDto';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpCient:HttpClient){}
  baseUrl:string = 'https://localhost:44378/api';
  public customerLogin = ( body: Login) => {
    return this.httpCient.post<LoginDto>(this.baseUrl+'/'+'Login'+'/'+'CustomerLogin', body);
  }
  public washerLogin = ( body: Login) => {
    return this.httpCient.post<LoginDto>(this.baseUrl+'/'+'Login'+'/'+'WasherLogin', body);
  }
}
