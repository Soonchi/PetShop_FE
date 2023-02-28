import {Injectable, SecurityContext} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

import {Product} from "../models/product";
import {AddToCart} from '../models/AddToCart';
import {Catalog} from '../models/catalog';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api_domain}/api/getAllProduct`)
  }


  getProductByCatalogName(id: Catalog) {
    return this.httpClient.get(`${environment.api_domain}/api/product/getProductByCaTegory/` + id)
  }

  getProductByCatalogDog() {
    return this.httpClient.get(`${environment.api_domain}/api/product/getProductByCaTegory/1`)
  }

  getProductByCatalogCat() {
    return this.httpClient.get(`${environment.api_domain}/api/product/getProductByCaTegory/2`)
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api_domain}/api/product/getProductById/` + id)
  }


  addToCart(addToCart: AddToCart) {
    return this.httpClient.post<any>(`${environment.api_domain}/api/cart/add`, addToCart)
  }


  getCartDetails() {
    return this.httpClient.get(`${environment.api_domain}/api/cart/getCart`)
  }


  deleteCartDetails(productId: any) {
    return this.httpClient.delete(`${environment.api_domain}/api/cart/delete/` + productId)
  }


}
