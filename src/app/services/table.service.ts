import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private baseURL = 'https://localhost:7120/api/Flights/FlightsByRoute'

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.baseURL);
  }
}
