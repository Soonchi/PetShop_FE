import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import {FooterComponent} from "./footer/footer.component";
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { DogproductComponent } from './dogproduct/dogproduct.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import { DetailproductComponent } from './dogproduct/detailproduct/detailproduct.component';
import { CartComponent } from './cart/cart.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { BuyProductComponent } from './buy-product/buy-product.component';
import {UserService} from "./service/user.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { SuccessComponent } from './success/success.component';
import { ViewCatalogComponent } from './view-catalog/view-catalog.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    IntroduceComponent,
    ContactComponent,
    DogproductComponent,
    DetailproductComponent,
    CartComponent,
    BuyProductComponent,
    OrderdetailsComponent,
    SuccessComponent,
    ViewCatalogComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxUsefulSwiperModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        FormsModule,
      MatDialogModule

    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
