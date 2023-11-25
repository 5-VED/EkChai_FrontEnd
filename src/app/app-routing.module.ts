import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.module').then((m) => m.CafeModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
