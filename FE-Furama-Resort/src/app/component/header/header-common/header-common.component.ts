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
    this.router.navigateByUrl("/login");
  }

}
