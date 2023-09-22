import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SecurityService} from "../../../service/security/security.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Token} from "../../../model/token";
import {TokenStorageService} from "../../../service/token/token-storage.service";

//  cú pháp tạo component: ng g c login
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// 2. tạo class để thực hiện chức năng login
export class LoginComponent implements OnInit {
  token: Token | any;
  formGroup!: FormGroup;
  accountName: string = "";
  roles: String[] = [];
  returnUrl: string = "";


  constructor(private tokenStorage: TokenStorageService,
              private securityService: SecurityService,
              private router: Router,
              private formBuild: FormBuilder,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    //  Phải khai báo Form để lấy data từ FE về call API
    this.formGroup = this.formBuild.group({
        accountName: [''],
        password: [''],
        remember_me: ['']
      }
    );
    //  kiểm tra xem trong ứng dụng Angular của bạn có token đăng nhập (authentication token)
    //  đã được lưu trữ hay không
    //  nếu có, nó sẽ lấy thông tin về vai trò (roles) và tên người dùng từ token đó
    //  và gán chúng vào các biến this.roles và this.accountName
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getUser().roles;
      this.accountName = this.tokenStorage.getUser().username;
    }
  }

  onSubmit() {
    //  lấy giá trị từ form login
    // bằng phuong thuc login call API
    this.securityService.login(this.formGroup.value).subscribe(data => {
      // kiểm tra người chùng có chọn checkbox trong form đăng nhập ko
      //  nếu có thì là true và thực hiện lưu trữ token và thông tin người dùng
      //  trong local storage
        if (this.formGroup.value.remember_me) {
          this.tokenStorage.saveTokenLocal(data.token);
          this.tokenStorage.saveUserLocal(data);
          //   nếu ko thì token sẽ được lưu trữ trong session storage
        } else {
          this.tokenStorage.saveTokenSession(data.token);
          this.tokenStorage.saveUserLocal(data);
        }
        // lấy các thông tin để phục vụ hiện thị
        this.accountName = this.tokenStorage.getUser().username;
        this.roles = this.tokenStorage.getUser().roles;
        // xóa trắng để chuẩn bị cho lần đăng nhập tiếp theo.
        this.formGroup.reset()
        // quay lại đường dẫn trước đó
          this.router.navigateByUrl(this.returnUrl)
      }, error => {
        console.log(error)
      }
    );
  }
}
