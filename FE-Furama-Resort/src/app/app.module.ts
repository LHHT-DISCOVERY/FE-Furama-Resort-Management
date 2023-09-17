import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderAdminComponent } from './component/header/header-admin/header-admin.component';
import { HeaderCommonComponent } from './component/header/header-common/header-common.component';
import { SlidebarComponent } from './component/slidebar/slidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderAdminComponent,
    HeaderCommonComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    HeaderCommonComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
