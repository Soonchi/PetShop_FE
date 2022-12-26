import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {windowWhen} from "rxjs";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor( private loginService: UserService,
               private router: Router,
               private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: '',
        password:  '',
      }
    )
  }






  login() {
    const warning = document.getElementsByClassName('warning')[0] as HTMLElement;
    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const user = this.loginForm.value;
    if (user.username && user.password ) {
      this.loginService.login(user.username, user.password)
        .subscribe(
          res => {
            success.classList.add('active')
            setTimeout(() => {
              success.classList.remove('active');
              this.router.navigate(['home']);
              localStorage.setItem("user", user.username);
            }, 2000)

          },
          error => {
            warning.classList.add('active')
            setTimeout(() => {
              warning.classList.remove('active');
              this.loginForm.reset();
            }, 2000)
          })
    }

  }
}
