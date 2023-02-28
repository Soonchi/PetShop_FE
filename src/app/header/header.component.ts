import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {MatDialog} from "@angular/material/dialog";
import { CatalogService } from '../service/catalog.service';
import {Catalog} from "../models/catalog";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username = window.localStorage.getItem('username');
  listcatalog: Catalog[] = [];
  constructor(private router: Router,
              private userService: UserService,
              private catalogService: CatalogService) {
  }


  ngOnInit(): void {
    this.getAllCatalog()

    const navbar = document.getElementsByClassName('navbar')[0] as HTMLElement;
    const addnavbar = document.querySelectorAll('#menu-btn')[0] as HTMLElement;
    const add = document.getElementsByClassName('functionuser')[0] as HTMLElement;
    const addlore = document.getElementsByClassName('login-register')[0] as HTMLElement;
    const lore = document.getElementById("lo-re");



    if (this.username) {
      addlore.style.display = 'none';
      lore!.onclick = () => {
        add!.classList.toggle('active')
      }
    } else {
      lore!.onclick = () => {
        addlore!.classList.toggle('active')
      }
    }



    addnavbar!.onclick = () => {
      navbar.classList.toggle('active')
    }

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelectorAll('.header')[0].classList.add('active');
        add.classList.remove('active');
        addlore.classList.remove('active');

      } else {
        document.querySelectorAll('.header')[0].classList.remove('active');
      }
    }

    window.onload = () => {
      if (window.scrollY > 0) {
        document.querySelectorAll('.header')[0].classList.add('active');
      } else {
        document.querySelectorAll('.header')[0].classList.remove('active');
      }
    }
  }



  logout() {
    localStorage.removeItem("username")
    this.router.navigate(['home']);
  }



  getAllCatalog() {
    this.catalogService.getListCatalog().subscribe(data => {
      this.listcatalog = data
    })
  }

  reloadpage() {
    window.location.reload();
  }
}





