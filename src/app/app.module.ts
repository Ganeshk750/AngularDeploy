import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { IpAddressComponent } from './ip-address/ip-address.component';
import { LodashComponent } from './lodash/lodash.component';



const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LoginComponent,
    DashboardComponent,
    IpAddressComponent,
    LodashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
