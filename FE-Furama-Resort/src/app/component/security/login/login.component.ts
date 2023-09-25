import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../../service/security/security.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Token} from "../../../model/token";
import {TokenStorageService} from "../../../service/token/token-storage.service";
import {ToastrService} from "ngx-toastr";

//  cú pháp tạo component: ng g c login
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

// 2. tạo class để thực hiện chức năng login
export class LoginComponent implements OnInit {
    // Khai bảo biến trong angular v16
    token: Token | any;
    formGroup!: FormGroup;
    accountName: string = "";
    roles: String[] = [];
    returnUrl: string = "";


    constructor(private tokenStorage: TokenStorageService,
                private securityService: SecurityService,
                private router: Router,
                private formBuild: FormBuilder,
                private route: ActivatedRoute,
                private toast: ToastrService) {
    }

    showSuccess(username: string) {
        this.toast.success('Đăng nhập thành công', "Xin chào " + username, {
            timeOut: 2000
        });
        console.log('Toast message');
    }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
        //  Phải khai báo Form và validate để lấy data từ FE về call API
        this.formGroup = this.formBuild.group({
                // cú phap validate: [" ", [validator]]
                // Error: Property 'accountName' comes from an index signature, so it must be accessed with ['accountName']
                // => set noPropertyAccessFromIndexSignature => false => ng s -o
                accountName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
                password: ['', [Validators.required, Validators.minLength(8)]],
                remember_me: ['']
            }
        );
        //  kiểm tra xem trong ứng dụng Angular của bạn có token đăng nhập (authentication token)
        //  đã được lưu trữ hay không
        //  nếu có, nó sẽ lấy thông tin về vai trò (roles) và tên người dùng từ token đó
        //  và gán chúng vào các biến this.roles và this.accountName
        if (this.tokenStorage.getToken()) {
            console.log("Hàm ngOnInit :" + this.tokenStorage.getUser())
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
                    console.log("token data : " + data.token)
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
                this.showSuccess(this.accountName)
            }, error => {
                console.log("Lỗi tại toát : " + error);
                this.toast.error("Sai tên tài khoản hoặc mất khẩu không đúng", "Đăng nhập thất bại")
            }
        );
    }
}
