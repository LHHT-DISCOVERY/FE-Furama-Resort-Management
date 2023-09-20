import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeaderCommonComponent} from "./header-common.component";
import {RouterLink} from "@angular/router";
import {SecurityRoutingModule} from "../../security/security-routing.module";

@NgModule({
  declarations: [
    HeaderCommonComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    // phải import "Routing" của module cần thiết để chuyển từ module này qua module khác
    //  vd: đang đứng module header và import routing module Security để chuyển từ module header qua module của security
    //  tại module header : (component: toLogin() => html: (click)=toLogin())
    SecurityRoutingModule
  ],
  exports: [
    HeaderCommonComponent
  ]
})
export class HeaderCommonModule {
}
