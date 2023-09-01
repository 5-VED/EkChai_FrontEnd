import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ViewBillsComponent } from './view-bills/view-bills.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'cafe', component: DashboardComponent },
  { path: 'managecategory', component: ManageCategoryComponent },
  { path: 'products', component: ManageProductsComponent },
  { path: 'orders', component: ManageOrdersComponent },
  { path: 'bills', component: ViewBillsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeRoutingModule {}
