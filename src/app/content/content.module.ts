import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ContentRoutingModule} from './content-routing.module';
import { SomeComponent } from './some/some.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule
  ],
  declarations: [
  SomeComponent],
  providers: [
  ]
})
export class ContentModule {}
