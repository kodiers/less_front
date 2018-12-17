import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = null;

  constructor(private authSvc: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginSubmit(form: NgForm) {
    this.errorMessage = null;
    if (form.valid) {
      this.authSvc.loginUser(form.controls.username.value, form.controls.password.value).subscribe(
        (token) => {
          if (token) {
            this.router.navigate(['/some']);
          } else {
            this.errorMessage = 'Could not authenticate user';
          }
        },
        (errorResponse) => {
          this.errorMessage = errorResponse.error.error;
        });
    }
  }

}
