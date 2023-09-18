import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        AppModule
    ]
})
//  cú pháp tạo modlue : ng g m security  --routing
export class SecurityModule { }
