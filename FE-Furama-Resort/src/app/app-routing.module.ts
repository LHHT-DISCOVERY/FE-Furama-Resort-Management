import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRoomListComponent} from "./component/user-view-room/user-room-list/user-room-list.component";

const routes: Routes = [
  {
    path: "",
    component: UserRoomListComponent,
  },
  {
    path: "room",
    loadChildren: () => import('./component/user-view-room/user-view-room.module').then(module => module.UserViewRoomModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
