import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserViewRoomModule} from './component/user-view-room/user-view-room.module';
import {SecurityModule} from "./component/security/security.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SlidebarModule} from "./component/slidebar/slidebar.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserViewRoomModule,
        // import BrowserAnimationsModule để sử dụng toast
        BrowserAnimationsModule,
        SecurityModule,
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
