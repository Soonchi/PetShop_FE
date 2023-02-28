import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {windowWhen} from "rxjs";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor( private loginService: UserService,
               private router: Router) {}

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //     username: '',
    //     password:  '',
    //   }
    // )
  }






  login(loginForm: NgForm) {
    const warning = document.getElementsByClassName('warning')[0] as HTMLElement;
    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    // if (user.username && user.password ) {
      this.loginService.login(loginForm.value)
        .subscribe(
          res => {
            this.loginService.setToken(res.accessToken)
            localStorage.setItem("username", loginForm.value.username)
            success.classList.add('active')
            setTimeout(() => {
              success.classList.remove('active');
              this.router.navigate(['home']);
            }, 2000)


          },
          error => {
            warning.classList.add('active')
            setTimeout(() => {
              warning.classList.remove('active');
              // this.loginForm.reset();
            }, 2000)
          })
    // }

  }
}
