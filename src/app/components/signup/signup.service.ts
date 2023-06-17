import { Injectable } from '@angular/core';
import { IPass } from './pass-list';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private passUrlApi = 'https://localhost:7120/api/Account/register-passenger';

  constructor(private http: HttpClient) { 

  }
  addPassService({ pass }: { pass: IPass; }): Observable<any> {

    const headers = { 'content-type': 'application/json'}

    const body=JSON.stringify(pass);

    console.log(body)

    return this.http.post(this.passUrlApi, body, {'headers': headers})

  }

  private handleError(err: HttpErrorResponse) {

    // in a real world app, we may send the server to some remote logging infrastructure

    // instead of just logging it to the console

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    }

    console.error(errorMessage);

    return throwError(() => errorMessage);

  }
}


//   (value: any) {
//     throw new Error('Method not implemented.');
//   }

//   constructor() { }
// }

