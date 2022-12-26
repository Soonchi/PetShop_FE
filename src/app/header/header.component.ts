import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username = window.localStorage.getItem('user');

  constructor(private router: Router) {
  }


  ngOnInit(): void {

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
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }

}





