import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SecurityRoutingModule} from './security-routing.module';
import {LoginComponent} from './login/login.component';
import {HeaderCommonModule} from "../header/header-common/header-common.module";
import {FooterModule} from "../footer/footer.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  // lưu ý file module con ko import module  roof (app module)
  imports: [
    CommonModule,
    SecurityRoutingModule,
    // import 2 module header và footer để sử dụng trong html của component login
    HeaderCommonModule,
    FooterModule,

  ]
})
//  cú pháp tạo modlue : ng g m security  --routing
export class SecurityModule {
}
