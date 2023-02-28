import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import { IntroduceComponent } from './introduce/introduce.component';
import {ContactComponent} from "./contact/contact.component";
import {DogproductComponent} from "./dogproduct/dogproduct.component";
import {DetailproductComponent} from "./dogproduct/detailproduct/detailproduct.component";
import {CartComponent} from "./cart/cart.component";
import {BuyProductComponent} from "./buy-product/buy-product.component";
import {AuthGuard} from "./auth/auth.guard";
import {OrderdetailsComponent} from "./orderdetails/orderdetails.component";
import { SuccessComponent } from './success/success.component';
import { ViewCatalogComponent } from './view-catalog/view-catalog.component';
import {DialogNotificationComponent} from "./dialog-notification/dialog-notification.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'contact', component: ContactComponent},
  {path:'dogproduct/:id', component: DogproductComponent},
  {path: 'detailproduct/:id', component: DetailproductComponent},
  {path: 'cart', component: CartComponent, canActivate:[AuthGuard]},
  {path: 'buyProduct', component: BuyProductComponent},
  {path: 'orderdetails', component: OrderdetailsComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'view-catalog/:id', component: ViewCatalogComponent},
  {path: 'dialog-notification', component: DialogNotificationComponent},
  {path: '',pathMatch:"full", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
