import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth = false;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    if (this.authSvc.getToken()) {
      this.isAuth = true;
    }
  }

}
