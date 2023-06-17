import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './components/airline/airline.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CreateLandingPageComponent } from './components/create-landing-page/create-landing-page.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { PriceComponent } from './components/price/price.component';
import { PassengersComponent } from './components/passengers/passengers.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'airline', component: AirlineComponent},
  {path:'page', component: CreateLandingPageComponent},
  {path:'price',component:PriceComponent},
  {path:'seat',component:SeatSelectionComponent},
  {path:'passengers',component:PassengersComponent},
  {path:'**', component: CreateLandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


