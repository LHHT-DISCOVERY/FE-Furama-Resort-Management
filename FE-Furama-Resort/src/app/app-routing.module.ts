import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserViewRoomModule} from "./component/user-view-room/user-view-room.module";
import {UserRoomListComponent} from "./component/user-view-room/user-room-list/user-room-list.component";
import {HeaderCommonComponent} from "./component/header/header-common/header-common.component";

const routes: Routes = [
  {
    path: "",
    component: UserRoomListComponent
  },
  {
    path:"login" ,
    component: HeaderCommonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
