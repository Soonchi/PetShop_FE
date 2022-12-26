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
  login(username: string, password: string) {
    return  this.httpClient.post<Users>(`${environment.api_domain}/api/login`, {username, password})
  }

}
