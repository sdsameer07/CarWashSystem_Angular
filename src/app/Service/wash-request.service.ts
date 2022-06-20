import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WashNow } from '../Models/WashNowModel/WashNow';
import { WashRequest } from '../Models/WashRequest';

@Injectable({
  providedIn: 'root'
})
export class WashRequestService {
  res:string
  constructor(private http:HttpClient) { }
  baseUrl:string = 'https://localhost:44378/api';
  GetWashRequest() {
    return this.http.get<WashRequest[]>(this.baseUrl+'/'+'wash'+'/'+'GetWashRequest');
  }
  GetWashRequestByEmail(userEmail:string  | null) {
    return this.http.get<WashRequest[]>(this.baseUrl+'/'+'wash'+'/'+'GetWashRequestByEmail?email='+userEmail);
  }
  AcceptRequest(carNum:string  | null){
    return this.http.get(this.baseUrl+'/'+'wash'+'/'+'AcceptWash?carNum=' + carNum);
  }
  RejectRequest(carNum:string  | null){
    return this.http.get(this.baseUrl+'/'+'wash'+'/'+'RequestWash?carNum=' + carNum);
  }
}
