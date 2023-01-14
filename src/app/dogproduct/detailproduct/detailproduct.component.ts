import { Component } from '@angular/core';
import Swiper from "swiper";
import {Product} from "../../models/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss']
})
export class DetailproductComponent {
  Path = "http://localhost:3000/";
  productId: number = 0;
    product: Product = new Product();
  constructor(private productService: ProductService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productId = this.router.snapshot.params['productId'];
    this.getProductById()
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      loop: false,
      freeMode: true,
      loopedSlides: 3, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    const galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 0, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
}

  getProductById() {
    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
      console.log(this.product)
    })
  }

}
