import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Catalog} from "../models/catalog";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient: HttpClient) { }

  getListCatalog(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.api_domain}/api/cate/list`)
  }



}
