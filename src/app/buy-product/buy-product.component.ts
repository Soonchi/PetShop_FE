import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from "../service/product.service";
import {OrderService} from "../service/order.service";
import {Order} from "../models/Order";
import {Router} from "@angular/router";

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {
  Path = "http://localhost:3000/";
  totalPrice!: number;
  cartDetails: any[] = [];
  dataForm!: FormGroup;

constructor(private productService: ProductService,
            private orderService: OrderService,
            private router: Router) {}

  ngOnInit(): void {
    this.getCartDetails()
    this.getCartTotalPrice();
    this.dataForm = new FormGroup({
      fullName: new FormControl,
      contactNumber: new FormControl,
      address: new FormControl,
      amount: new FormControl
    })


  }

  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }

  getCartDetails() {
    this.productService.getCartDetails().subscribe((data: any) => {
      this.cartDetails = data
      console.log(this.cartDetails)
    }, err => {
      console.log(err);
    })
  }

  getCartTotalPrice() {
    let total: number = 0;

    this.productService.getCartDetails().subscribe((data: any) => {
      data.forEach((item: any) => {
        total += item.totalPrice;
        this.totalPrice = total;

      })
    }, err => {
      console.log(err);
    })
  }

  addToOrder() {
    const data: Order = {
      fullName: this.dataForm.value.fullName,
      contactNumber: this.dataForm.value.contactNumber,
      address: this.dataForm.value.address,
      amount: this.totalPrice
    }
    this.orderService.addToOrder(data).subscribe(data => {
      // setTimeout(() => {
      //   this.router.navigate(['/success'])
      // }, 1500)
      //
      // setTimeout(() => {
      //   this.router.navigate(['/home'])
      // },3000)
      console.log(data)

    })
  }
}
