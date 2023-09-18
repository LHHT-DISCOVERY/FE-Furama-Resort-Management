import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderCommonComponent } from "./header-common.component";

@NgModule({
  declarations: [
    HeaderCommonComponent
  ],
  imports: [
    CommonModule,
    ],
    exports: [
        HeaderCommonComponent
  ]
})
export class HeaderCommonModule {
}
