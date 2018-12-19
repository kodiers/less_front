import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth = false;

  constructor(private authSvc: AuthService,
              private http: HttpClient) { }

  ngOnInit() {
    if (this.authSvc.getToken()) {
      this.isAuth = true;
    }
    this.authSvc.authChanged.subscribe((authState) => {
      this.isAuth = authState;
    });
    this.http.get(API_URL + '/api/v1/users/user-info').subscribe((resp) => {
      console.log(resp);
    });
  }

}
