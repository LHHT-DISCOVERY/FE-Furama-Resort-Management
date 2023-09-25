import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRoomListComponent} from "./component/user-view-room/user-room-list/user-room-list.component";
import {AuthGuardService} from "./service/security/auth-guard.service";

const routes: Routes = [
    {
        path: "",
        component: UserRoomListComponent,
    },
    {
        path: "customer-management", canActivate: [AuthGuardService],
        loadChildren: () => import('./component/admin-customer-managerment/admin-customer-managerment.module').then(module => module.AdminCustomerManagermentModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
