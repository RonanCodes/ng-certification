import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@feature/dashboard/dashboard.component';
import { ForecastComponent } from '@feature/forecast/forecast.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forecast/:zipCode', component: ForecastComponent }, // TODO: Add a route activation to get the forecast info before loading the route.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
