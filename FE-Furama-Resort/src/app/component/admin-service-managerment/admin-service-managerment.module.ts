import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminServiceManagermentRoutingModule } from './admin-service-managerment-routing.module';
import { AdminServiceCreateComponent } from './admin-service-create/admin-service-create.component';


@NgModule({
  declarations: [
    AdminServiceCreateComponent
  ],
  imports: [
    CommonModule,
    AdminServiceManagermentRoutingModule
  ]
})
export class AdminServiceManagermentModule { }
