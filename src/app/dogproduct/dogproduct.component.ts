import {Component} from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../models/product";
import {CatalogService} from '../service/catalog.service';
import {Catalog} from "../models/catalog";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dogproduct',
  templateUrl: './dogproduct.component.html',
  styleUrls: ['./dogproduct.component.scss']
})
export class DogproductComponent {
  listproduct: Product[] = [];

  Path = "http://localhost:3000/";
  searchCatalog!: Catalog;
  id: any
  name!: string
  dataForm!: FormGroup;


  constructor(private productService: ProductService,
              private catalogService: CatalogService,
              private activeRoute: ActivatedRoute) {
  }


  convertNumber(s: any) {
    if (typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data => {
      this.id = data.get('id');
      if (this.id == 1) {
        this.name = "Chó Cảnh"
      } else {
        this.name = "Mèo Cảnh"
      }
    })
    this.getProductByCatalog()

    this.dataForm = new FormGroup(
      {
        name: new FormControl
      }
    )


  }

  getProductByCatalog() {
    this.productService.getProductByCatalogName(this.id).subscribe((data: any) => {
      this.listproduct = data;
    })
  }


  onSearch() {

  }


}
