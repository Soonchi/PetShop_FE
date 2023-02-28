import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from "../service/product.service";
import {OrderService} from "../service/order.service";
import {Order} from "../models/Order";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SuccessComponent} from "../success/success.component";

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {
  Path = "http://localhost:3000/";
  totalPrice!: number;
  cartDetails!: any[];
  dataForm!: FormGroup;

constructor(private productService: ProductService,
            private orderService: OrderService,
            private router: Router,
            private dialog: MatDialog) {}

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
      this.cartDetails = data.productCarts
    }, err => {
      console.log(err);
    })
  }

  getCartTotalPrice() {
    let total: number = 0;

    this.productService.getCartDetails().subscribe((data: any) => {
      data.productCarts.forEach((item: any) => {
        total += item.totalprice;
        this.totalPrice = total;
      })
    }, err => {
      console.log(err);
    })
  }

  addToOrder() {
    const data: Order = {
      nameofreceiver: this.dataForm.value.fullName,
      numberofreceiver: this.dataForm.value.contactNumber,
      addressofrecevicer: this.dataForm.value.address,
      amount: this.totalPrice
    }
    this.orderService.addToOrder(data).subscribe(data => {
      setTimeout(() => {
        this.dialog.open(SuccessComponent)
      }, 1500)
      setTimeout(() => {
        this.dialog.closeAll()
        this.router.navigate(["/home"])
      }, 3000)


    })
  }
}
