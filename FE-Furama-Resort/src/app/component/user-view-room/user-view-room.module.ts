import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserViewRoomRoutingModule} from './user-view-room-routing.module';
import {UserRoomDetailComponent} from './user-room-detail/user-room-detail.component';
import {UserRoomListComponent} from './user-room-list/user-room-list.component';
import {FooterComponent} from "../footer/footer.component";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    UserRoomDetailComponent,
    UserRoomListComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserViewRoomRoutingModule,
    AppModule,
  ]
})
export class UserViewRoomModule {
}
