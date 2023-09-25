import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminCustomerListComponent} from "./admin-customer-list/admin-customer-list.component";

const routes: Routes = [
    {
        path: "list", component: AdminCustomerListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminCustomerManagermentRoutingModule {
}
