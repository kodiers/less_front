import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SomeComponent} from './some/some.component';
import {AuthGuard} from '../auth/guards/auth.guard';

const routes: Routes = [
  { path: 'some', component: SomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ContentRoutingModule {}
