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

  getListCatalog(): Observable<Catalog[]> {
    return this.httpClient.get<Catalog[]>(`${environment.api_domain}/api/getAllCatalog`)
  }

  addCatalog(catalog: Catalog){
    return this.httpClient.post<Catalog>(`${environment.api_domain}/api/addNewCatalog`, catalog)
  }

  deleteCatalog(catalogId: number) {
    return this.httpClient.delete(`${environment.api_domain}/api/deleteCatalog/${catalogId}`)
  }

  updateCatalog(data:any, catalogId: number) {
    return this.httpClient.put<any>(`${environment.api_domain}/api/updateCatalog/`+ catalogId, data)
  }

}
