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
    return  this.httpClient.post<Users>(`${environment.api_domain}/api/auth/registry`, user);
  }
  login(user: Users) {
    return  this.httpClient.post<Users>(`${environment.api_domain}/api/auth/login`, user)
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
