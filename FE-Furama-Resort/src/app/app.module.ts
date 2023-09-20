import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SlidebarComponent} from './component/slidebar/slidebar.component';
import {UserViewRoomModule} from './component/user-view-room/user-view-room.module';
import {SecurityModule} from "./component/security/security.module";


@NgModule({
  declarations: [
    AppComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserViewRoomModule,
    SecurityModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
