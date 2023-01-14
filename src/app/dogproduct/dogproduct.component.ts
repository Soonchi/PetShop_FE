import { Component } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-dogproduct',
  templateUrl: './dogproduct.component.html',
  styleUrls: ['./dogproduct.component.scss']
})
export class DogproductComponent {
  listproduct: Product[] = [];

  Path = "http://localhost:3000/";





  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllProduct()
  }
  getAllProduct() {
    const res = this.productService.getListProducts();
    res.subscribe(report => this.listproduct = report as unknown as Product[])
  }


}
