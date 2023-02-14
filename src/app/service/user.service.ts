import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "../models/Users";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  httpClient: HttpClient) {}
  register(user: Users) {
    return  this.httpClient.post<Users>(`${environment.api_domain}/api/registration`, user);
  }
  login(user: Users) {
    return  this.httpClient.post<Users>(`${environment.api_domain}/api/login`, user)
  }

  edit(id: number, data: any) {
    return this.httpClient.post<any>(`${environment.api_domain}/api/editUser`+ id, data)
  }

  setToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  getToken() {
    localStorage.getItem("accessToken")
  }

  clear() {
    localStorage.clear()
  }


}
