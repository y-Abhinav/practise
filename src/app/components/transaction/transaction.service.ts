import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

import { ITransaction } from './list';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrlApi = 'https://localhost:7120/api/Transactions';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('Access-Control-Allow-Origin', '*')  
  }

  //constructor() { }
  constructor(private http: HttpClient) { }

  addtransactionService(transaction: ITransaction): Observable<ITransaction> {
    const headers = { 'content-type': 'application/json'}
    //transaction.transactionId=0;
    let body = JSON.stringify(transaction);
    console.log(transaction);
    //return this.http.post(this.passengerUrlApi, body, {'headers': headers});
    return this.http.post<ITransaction>(this.transactionUrlApi ,body ,this.httpOptions).pipe(catchError(this.errorHandler));
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
