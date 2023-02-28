import { Component } from '@angular/core';
import Swiper from "swiper";
import {Product} from "../../models/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Route, Router, Routes} from "@angular/router";
import {FormControl, FormGroup} from '@angular/forms';
import {AddToCart} from "../../models/AddToCart";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss']
})
export class DetailproductComponent {
  Path = "http://localhost:3000/";
  cartDetails: any[] = [];
  id: number = 0;
    product: Product = new Product();
  constructor(private productService: ProductService,
              private router: ActivatedRoute,
              private route: Router) {
  }

  dataForm!:   FormGroup;


  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }
  ngOnInit(): void {
    this.dataForm = new FormGroup({
      quantity: new FormControl(1)
    });
    this.id = this.router.snapshot.params['id'];
    this.getProductById()

}


  getProductById() {
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
      console.log(this.product)
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

  get() {
    console.log(this.dataForm.value.quantity)
  }


  addToCart(id: string) {
    const data: AddToCart = {
      id: id,
      quantity: this.dataForm.value.quantity
    }

    const alert = document.getElementsByClassName('alert')[0] as HTMLElement;
    this.productService.addToCart(data).subscribe(res => {
      alert.classList.toggle('active');

      setTimeout(() =>{
        alert.classList.remove('active');
      }, 1000)
    }, err => {
      console.log(err);
    })
  }

}
