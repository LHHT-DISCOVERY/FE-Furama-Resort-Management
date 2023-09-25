import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmployeeManagermentRoutingModule } from './admin-employee-managerment-routing.module';
import { AdminEmployeeListComponent } from './admin-employee-list/admin-employee-list.component';
import { AdminEmployeeEditComponent } from './admin-employee-edit/admin-employee-edit.component';
import { AdminEmployeeCreateComponent } from './admin-employee-create/admin-employee-create.component';


@NgModule({
  declarations: [
    AdminEmployeeListComponent,
    AdminEmployeeEditComponent,
    AdminEmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    AdminEmployeeManagermentRoutingModule
  ]
})
export class AdminEmployeeManagermentModule { }
