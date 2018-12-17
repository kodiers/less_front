import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import {AuthService} from '../auth/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [AuthService]
})
export class SharedModule {}
