import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../service/token/token-storage.service";

@Component({
  selector: 'app-header-common',
  templateUrl: './header-common.component.html',
  styleUrls: ['./header-common.component.css']
})
// 3. cập nhật thành phan header khi login vs logout
export class HeaderCommonComponent implements OnInit {
  accountName: string = "";
  role: string = "";
  isLogin: boolean = false;

  constructor(private router: Router,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    this.loadHeader()
  }

  loadHeader(): void {
    console.log("token : " + this.tokenStorage.getToken())
    if (this.tokenStorage.getToken()) {
      // roles tương ứng trong local storage click F12 lấy tên của ROLE, Username,...
      this.role = this.tokenStorage.getUser().roles[0];
      this.accountName = this.tokenStorage.getUser().username;
      // lấy userName từ kho lưu tru token
      console.log("accountname : " + this.tokenStorage.getUser().username)
      // đăng nhập thành công set lại islogin = true (đã đăng nhap);
      this.isLogin = true;
    } else {
      // set lại chua dang nhap
      this.isLogin = false;
    }

  }

  toLogin() {
    // cấu hình "/login"  giống path của file routing trong security module
    //  để chuyển từ module header sang module login
    this.router.navigateByUrl("/login");
  }

  logOut() {
    this.tokenStorage.singOut();
    // load lại header
    window.location.reload();
  }

}
