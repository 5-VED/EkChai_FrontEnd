import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeRoutingModule } from './cafe-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ViewBillsComponent } from './view-bills/view-bills.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    ManageCategoryComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    ViewBillsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CafeRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class CafeModule {}
