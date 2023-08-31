import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeRoutingModule } from './cafe-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, CafeRoutingModule, SharedModule],
})
export class CafeModule {}
