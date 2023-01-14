import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from "./register/register.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import { IntroduceComponent } from './introduce/introduce.component';
import {ContactComponent} from "./contact/contact.component";
import {DogproductComponent} from "./dogproduct/dogproduct.component";
import {CatproductComponent} from "./catproduct/catproduct.component";
import {DetailproductComponent} from "./dogproduct/detailproduct/detailproduct.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'introduce', component: IntroduceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dogproduct', component: DogproductComponent},
  {path: 'catproduct', component: CatproductComponent},
  {path: 'detailproduct/:productId', component: DetailproductComponent},
  {path: '',pathMatch:"full", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
