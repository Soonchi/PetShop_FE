import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {Users} from "../models/Users";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  dataForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      passwordxt: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      email : new FormControl('', [Validators.required, Validators.email])
    }
  );

  constructor(private userservice: UserService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  get user() { return this.dataForm.get('username'); }
  get password() { return this.dataForm.get('password'); }
  get passwordxt() { return this.dataForm.get('passwordxt'); }
  get email() { return this.dataForm.get('email'); }

  register(): void {
    const pw1 = (<HTMLInputElement>document.getElementById("passwordForm")).value
    const pw2 = (<HTMLInputElement>document.getElementById("passwordFormxt")).value
    const warning = document.getElementsByClassName('warning')[0] as HTMLElement;
    const success = document.getElementsByClassName('success')[0] as HTMLElement;
    const warningg = document.getElementsByClassName('warningg')[0] as HTMLElement;

    const user = this.dataForm.value as Users;
    if (pw1 == pw2) {
      this.userservice.register(user).subscribe(res => {
        success.classList.add('active')
        setTimeout(() => {
          success.classList.remove('active')
          this.dataForm.reset();
          this.router.navigate(['login']);
        }, 2000)

      }, err => {
        warningg.classList.add('active')
        setTimeout(() => {
          warningg.classList.remove('active')
          this.dataForm.reset();
        },2000)
      });
    } else {
      warning.classList.add('active')
      setTimeout(() => {
        warning.classList.remove('active');
        this.dataForm.reset();
      },3000)

    }
    }


}
