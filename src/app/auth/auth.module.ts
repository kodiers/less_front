import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import {AuthRoutingModule} from './auth-routing.module';
import { PasswordRulesDirective } from './validators/password-rules.directive';
import {AuthService} from './services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,
    PasswordRulesDirective
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}
