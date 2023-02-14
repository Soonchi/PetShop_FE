import { Component } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../models/product";
import { CatalogService } from '../service/catalog.service';
import {Catalog} from "../models/catalog";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dogproduct',
  templateUrl: './dogproduct.component.html',
  styleUrls: ['./dogproduct.component.scss']
})
export class DogproductComponent {
  listproduct: Product[] = [];

  Path = "http://localhost:3000/";
 searchCatalog!: Catalog;

catalogName!: string


  constructor(private productService: ProductService,
              private catalogService: CatalogService,
              private activeRoute: ActivatedRoute) {
  }

  catalogId: any

  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data => {
      this.catalogId = data.get('catalogId');
      if (this.catalogId == 1) {
        this.catalogName = "Chó Cảnh"
      } else {
        this.catalogName = "Mèo Cảnh"
      }
    })
    this.getProductByCatalog()

  }
  getProductByCatalog() {
    this.productService.getProductByCatalogName(this.catalogId).subscribe((data: any) => {
      this.listproduct = data;
    })
  }






}
