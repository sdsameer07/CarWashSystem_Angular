import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/UserModel'; 
import { Address } from '../Models/Address';
import { Car } from '../Models/CarModel/Car';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  baseUrl:string = 'https://localhost:44378/api';
  createUser(user: User) {
    return this.http.post(this.baseUrl+'/'+'UserProfile'+'/'+'AddUser', user);
  }
  getAddressByEmail(userEmail:string  | null) {
    return this.http.get<Address>(this.baseUrl+'/'+'UserProfile'+'/'+'GetAddressbyEmail?email='+userEmail);
  }
  getUserByEmail(userEmail:string  | null) {
    return this.http.get<User>(this.baseUrl+'/'+'UserProfile'+'/'+'GetUserbyEmail?email='+userEmail);
  }
  createCar(car: Car) {
    return this.http.post(this.baseUrl+'/'+'UserProfile'+'/'+'AddCar', car);
  }
  GetCars() {
    return this.http.get<Car[]>(this.baseUrl+'/'+'UserProfile'+'/'+'GetAllCars');
  }
  GetCarsById(userEmail:string  | null) {
    return this.http.get<Car[]>(this.baseUrl+'/'+'UserProfile'+'/'+'GetCarsbyEmail?email='+userEmail);
  }
}
