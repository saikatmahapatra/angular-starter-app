import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/@core/services/alert.service';
import { ApiService } from 'src/app/@core/services/api.service';
import { AppConfig } from 'src/app/@utils/const/app.config';
import { addressType, userStatus } from 'src/app/@utils/const/data.array';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-my-profile.component.html',
  styleUrls: ['./view-my-profile.component.scss']
})
export class ViewMyProfileComponent implements OnInit {
  userInfo: any;
  orgName = 'ABC';
  selfAccount = false;

  constructor(private apiSvc: ApiService, private alertSvc: AlertService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('pageName', 'myProfile');
    let options = {};
    options = { params: queryParams };
    this.apiSvc.get(AppConfig.apiUrl.userDetails, options).subscribe((response: any) => {
      if (response.status == 'success') {
        this.userInfo = response?.data?.user[0];
      }
    });
  }

  navigateTo(routeLink: any) {
    this.router.navigate(routeLink);
  }

}
