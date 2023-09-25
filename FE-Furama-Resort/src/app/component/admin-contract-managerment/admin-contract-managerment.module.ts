import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminContractManagermentRoutingModule } from './admin-contract-managerment-routing.module';
import { AdminContractCreateComponent } from './admin-contract-create/admin-contract-create.component';


@NgModule({
  declarations: [
    AdminContractCreateComponent
  ],
  imports: [
    CommonModule,
    AdminContractManagermentRoutingModule
  ]
})
export class AdminContractManagermentModule { }
