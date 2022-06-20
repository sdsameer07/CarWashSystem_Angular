import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/UserModel';
import { WashRequest } from '../Models/WashRequest';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  baseUrl:string = 'https://localhost:44378/api';
  GetAllCustomers() {
    return this.http.get<User[]>(this.baseUrl+'/'+'Admin'+'/'+'GetAllCustomers');
    
  }
  GetAllWashers() {
    return this.http.get<User[]>(this.baseUrl+'/'+'Admin'+'/'+'GetAllWashers');
  }
  GetAllWashRequests() {
    return this.http.get<WashRequest[]>(this.baseUrl+'/'+'Admin'+'/'+'GetAllWashRequests');
  }
}
