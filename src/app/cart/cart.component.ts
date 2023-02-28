import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ProductService} from "../service/product.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name','image', 'price', 'quantity', 'amount','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private productService: ProductService) {
  }




  cartDetails!: any[];
  Path = "http://localhost:3000/";
  totalPrice!: number;


  ngOnInit(): void {

      this.getCartDetails();
      this.getCartTotalPrice()
  }


  getCartDetails() {
    this.productService.getCartDetails().subscribe((data:any) => {
      this.cartDetails = data.productCarts
    }, err => {
      console.log(err);
    })
  }

  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }


  deleteCart(productId: any) {
    this.productService.deleteCartDetails(productId).subscribe((data: any) => {
      window.location.reload();
    },error => {
      console.log(error)
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


}

