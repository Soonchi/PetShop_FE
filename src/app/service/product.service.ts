import {Injectable, SecurityContext} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {DomSanitizer} from "@angular/platform-browser";
import {Form} from "@angular/forms";
import {Product} from "../models/product";



@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private httpClient: HttpClient) { }

  getListProducts(): Observable<any> {
    return this.httpClient.get<any>(`${environment.api_domain}/api/getAllProduct`)
  }

  getProductById(productId: number) : Observable<Product> {
    return this.httpClient.get<Product>(`${environment.api_domain}/api/getProductById/`+ productId)
  }

}
