import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RidesComponent } from './rides/rides.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';

const routes: Routes = [
  { path: 'rides', component: RidesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: RideDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
