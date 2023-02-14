import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order.service";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
  orderDetail: any[] = [];
  cartDetails: any[] = [];
  Path = "http://localhost:3000/";

  constructor(private orderService: OrderService,
              private productService: ProductService) {}



  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }

  ngOnInit(): void {
    this.getOrderDetail()
    this.getCartDetails()
  }

  getOrderDetail() {
    this.orderService.getOrderDetails().subscribe((data: any) => {
      this.orderDetail = data
      console.log(this.orderDetail)
    })
  }
  getCartDetails() {
    this.productService.getCartDetails().subscribe((data: any) => {
      this.cartDetails = data
      console.log(this.cartDetails)
    }, err => {
      console.log(err);
    })
  }
}
