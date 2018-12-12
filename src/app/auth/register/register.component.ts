import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: any = null;

  constructor(private authSvc: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerSubmit(form: NgForm) {
    this.errorMessage = null;
    if (form.valid) {
      this.authSvc.registerUser(form.controls.username.value, form.controls.password.value, form.controls.passwordConfirmation.value)
        .subscribe((response) => {
          this.router.navigate(['/login', {registered: 'success'}]);
        },
          (errorResponse) => {
          this.errorMessage = errorResponse.error.error;
        });
    }
  }

}
