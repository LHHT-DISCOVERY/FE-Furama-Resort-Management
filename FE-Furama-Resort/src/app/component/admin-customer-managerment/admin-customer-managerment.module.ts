import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminCustomerManagermentRoutingModule} from './admin-customer-managerment-routing.module';
import {AdminCustomerCreateComponent} from './admin-customer-create/admin-customer-create.component';
import {AdminCustomerEditComponent} from './admin-customer-edit/admin-customer-edit.component';
import {AdminCustomerListComponent} from './admin-customer-list/admin-customer-list.component';
import {SlidebarModule} from "../slidebar/slidebar.module";
import {HeaderAdminModule} from "../header/header-admin/header-admin.module";
import {HeaderCommonModule} from "../header/header-common/header-common.module";


@NgModule({
    declarations: [
        AdminCustomerCreateComponent,
        AdminCustomerEditComponent,
        AdminCustomerListComponent,
    ],
    imports: [
        CommonModule,
        AdminCustomerManagermentRoutingModule,
        SlidebarModule,
        HeaderAdminModule
    ]
})
export class AdminCustomerManagermentModule {
}
