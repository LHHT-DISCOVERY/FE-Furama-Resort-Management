import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserViewRoomModule} from "./component/user-view-room/user-view-room.module";
import {UserRoomListComponent} from "./component/user-view-room/user-room-list/user-room-list.component";

const routes: Routes = [
  {
    path: "",
    component: UserRoomListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
