import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

import { IPassengers } from './list';

@Injectable({
  providedIn: 'root'
})
export class PassengersService {

  private passengerUrlApi = 'https://localhost:7120/api/Passengers';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('Access-Control-Allow-Origin', '*')  
  }
  // const headers = new HttpHeaders()
  // headers=headers.append('Access-Control-Allow-Origin', '*')
  // if (!headers.has('content-type')) {
  //   headers=headers.append('content-type','application/json')
  // }

  constructor(private http: HttpClient) { }

  addpassengersService(passengers: IPassengers): Observable<IPassengers> {
    const headers = { 'content-type': 'application/json'}
    passengers.passengerId=0;
    let body = JSON.stringify(passengers);
    console.log(passengers);
    //return this.http.post(this.passengerUrlApi, body, {'headers': headers});
    return this.http.post<IPassengers>(this.passengerUrlApi ,body ,this.httpOptions).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }  
}
