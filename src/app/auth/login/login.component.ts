import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string = null;
  infoMessage: string = null;

  constructor(private authSvc: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['registered'] === 'success') {
        this.infoMessage = 'You\'ve been successfully registered. Please login!';
      }
    });
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
