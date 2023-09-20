import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-common',
  templateUrl: './header-common.component.html',
  styleUrls: ['./header-common.component.css']
})
export class HeaderCommonComponent {
  constructor(private router: Router) {

  }

  toLogin() {
    // cấu hình "/login"  giống path của file routing trong security module
    this.router.navigateByUrl("/login");
  }

}
