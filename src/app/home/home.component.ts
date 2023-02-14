import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper'
import {Product} from "../models/product";
import {ProductService} from "../service/product.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

[x: string]: any;
  config: SwiperOptions = {
    loop:true,
    speed:600,
    autoplay:{
      delay:3000,
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  listProductDog: Product[] = [];
  listProductCat: Product[] = [];



  Path = "http://localhost:3000/";


  constructor(private productService: ProductService) {}

  ngOnInit(): void {

this.getAllProductDog()
    this.getAllProductCat()
  }

  getAllProductDog() {
    this.productService.getAllProduct().subscribe((data: any) => {
      this.listProductDog = data.slice(0,8)
    })
  }
  getAllProductCat() {
    this.productService.getAllProduct().subscribe((data: any) => {
      this.listProductCat = data.slice(10,18)
      console.log(this.listProductCat)
    })
  }
  convertNumber(s: any) {
    if(typeof s == "number") {
      let tmp = s.toString();
      return tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return s;
  }




}







