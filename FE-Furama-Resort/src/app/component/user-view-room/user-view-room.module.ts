import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserViewRoomRoutingModule} from './user-view-room-routing.module';
import {UserRoomDetailComponent} from './user-room-detail/user-room-detail.component';
import {UserRoomListComponent} from './user-room-list/user-room-list.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderCommonModule } from '../header/header-common/header-common.module';

@NgModule({
  declarations: [
    UserRoomDetailComponent,
    UserRoomListComponent,
  ],
  imports: [
    HeaderCommonModule,
    FooterModule,
    CommonModule,
    UserViewRoomRoutingModule,
  ]
})
export class UserViewRoomModule {
}
