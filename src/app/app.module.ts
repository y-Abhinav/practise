import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AuthService } from './services/AuthService.service';
import { AuthInterceptor } from './auth/auth.interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
//import { TransactionComponent } from './components/transaction/transaction.component';
//import { ConfirmComponent } from './components/confirm/confirm.component';
import { AirlineComponent } from './components/airline/airline.component';
import { CreateLandingPageComponent } from './components/create-landing-page/create-landing-page.component';
import { PriceComponent } from './components/price/price.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { PassengersComponent } from './components/passengers/passengers.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
 //   TransactionComponent,
  //  ConfirmComponent,
    AirlineComponent,
    CreateLandingPageComponent,
    SeatSelectionComponent,
    PriceComponent,
    PassengersComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    RouterModule,
  
    ToastrModule.forRoot({    //Code Modified
      progressBar: true,
    })
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
