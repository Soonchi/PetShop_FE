import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Order } from '../models/Order';
import {catchError, Observable, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  addToOrder(order: Order) {
    return this.httpClient.post<Order>(`${environment.api_domain}/api/order/checkOut`,order)
  }

  getOrderDetails(){
    return this.httpClient.get(`${environment.api_domain}/api/order/getList`)
  }

  updateStatus(data: any) {
    return this.httpClient.post(`${environment.api_domain}/api/order/updateStatus`, data)
  }
}
