import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookVehicleComponent } from './booking/book-vehicle/book-vehicle.component';
import { HomeComponent } from './home/home/home.component';
import { AddVehicleComponent } from './user/add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './user/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'booking-vehicle',component:BookVehicleComponent},
  {path:'home',component:HomeComponent},
  {path:'add-vehicle',component:AddVehicleComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
