import { Component } from '@angular/core';

@Component({
  selector: 'app-catproduct',
  templateUrl: './catproduct.component.html',
  styleUrls: ['./catproduct.component.scss']
})
export class CatproductComponent {
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
