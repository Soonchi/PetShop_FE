import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper'



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
  listproduct = [
    {img:"./assets/img/home/chobully.jpg",
     name: "Chó Bully",
      price: "9,025,800 ₫"
    },
    {img:"./assets/img/home/choalatka.jpg",
      name: "Chó Alaska",
      price: "11,090,000 ₫"
    }
    ,{img:"./assets/img/home/choeskimo.jpg",
      name: "Chó American Eskimo",
      price: "14,289,000 ₫"
    }
    ,{img:"./assets/img/home/chobecgie.jpg",
      name: "Chó Becgie",
      price: "3,089,000 ₫"
    },
    {img:"./assets/img/home/chodoberman.jpg",
      name: "Chó Doberman Pinscher",
      price: "8.875.000"
    },
    {img:"./assets/img/home/chogolden.jpg",
      name: "Chó Golden ",
      price: "5,050,000 ₫"
    },
    {img:"./assets/img/home/chobulldoganh.jpg",
      name: "Chó Bulldog Anh",
      price: "8,562,000 ₫"
    },
    {img:"./assets/img/home/chophuquoc.jpg",
      name: "Chó Phú Quốc thuần chủng",
      price: "5,050,000 ₫"
    },

  ]





  constructor() {

  }

  ngOnInit(): void {


  }




}







