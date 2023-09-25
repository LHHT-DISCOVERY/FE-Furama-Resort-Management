import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecurityRoutingModule} from './security-routing.module';
import {LoginComponent} from './login/login.component';
import {HeaderCommonModule} from "../header/header-common/header-common.module";
import {FooterModule} from "../footer/footer.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    LoginComponent
  ],
  // lưu ý file module con ko import module  roof (app module)
  imports: [
    CommonModule,
    SecurityRoutingModule,
    // import 2 module header và footer để sử dụng ở file html của component login trong module security
    HeaderCommonModule,
    FooterModule,
    ReactiveFormsModule,
    HttpClientModule,
    // khi sử dụng toast phải Import vào module càn sử dụng
    ToastrModule.forRoot(
      {
        timeOut: 5000, // Time to close the toaster (in milliseconds)
        positionClass: 'toast-top-right', // Toast position
        closeButton: true, // Show close button
        progressBar: true, // Show progress bar
      }
    ),

  ]
})
//  cú pháp tạo modlue : ng g m security  --routing
export class SecurityModule {
}
