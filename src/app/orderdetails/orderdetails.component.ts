import { Component, OnInit } from '@angular/core';
import {OrderService} from "../service/order.service";
import {ProductService} from "../service/product.service";
import {Order} from "../models/Order";
import * as constants from "constants";
import {UpdateStatus} from "../models/UpdateStatus";
import {MatDialog} from "@angular/material/dialog";
import {DialogNotificationComponent} from "../dialog-notification/dialog-notification.component";

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
  orderDetail!:  any[];
  cartDetails!: any[];
  Path = "http://localhost:3000/";

  constructor(private orderService: OrderService,
              private dialog: MatDialog) {}



  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }

  ngOnInit(): void {
    this.getOrderDetail()

  }

  getOrderDetail() {
    this.orderService.getOrderDetails().subscribe((data: any) => {
      this.orderDetail = data
    })
  }




  openDialog() {
    this.dialog.open(DialogNotificationComponent)
  }
}
