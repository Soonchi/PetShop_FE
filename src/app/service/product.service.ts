import {Injectable, SecurityContext} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

import {Product} from "../models/product";
import { AddToCart } from '../models/AddToCart';
import { Catalog } from '../models/catalog';




@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api_domain}/api/getAllProduct`)
  }

  getProductByCatalogName(catalogId: Catalog) {
   return this.httpClient.get(`${environment.api_domain}/api/getProductByCaTalog/`+ catalogId)
  }

  getProductById(productId: number) : Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api_domain}/api/getProductById/`+ productId)
  }


  addToCart(addToCart: AddToCart) {
    return this.httpClient.post<any>(`${environment.api_domain}/api/addToCart`, addToCart)
  }


  getCartDetails() {
    return this.httpClient.get(`${environment.api_domain}/api/getCartDetails`)
  }


  deleteCartDetails(cartId: any) {
    return this.httpClient.delete(`${environment.api_domain}/api/deleteCartItem/`+cartId)
  }


}
