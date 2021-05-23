import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@feature/dashboard/dashboard.component';
import { ForecastComponent } from '@feature/forecast/forecast.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  // Note: We could add a route resolver to get the forecast info before loading the route:
  { path: 'forecast/:zipCode', component: ForecastComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  // Note: We can remove the hash routing once the app is ready for server and setup to allow refresh of parameterized routes.
  exports: [RouterModule]
})
export class AppRoutingModule { }
