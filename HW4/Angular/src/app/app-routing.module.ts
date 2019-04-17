import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '',   redirectTo: '/profile', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent},
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
