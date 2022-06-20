import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WashNow } from '../Models/WashNowModel/WashNow';

@Injectable({
  providedIn: 'root'
})
export class WashService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'https://localhost:44378/api';
  createWashNow(washnow: WashNow) {
    return this.http.post(this.baseUrl+'/'+'wash'+'/'+'WashNow', washnow);
  }
}
