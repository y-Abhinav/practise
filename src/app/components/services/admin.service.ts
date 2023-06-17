import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightClass } from '../models/class.model';
import { Flights } from '../models/flights.model';
import { FlightVM } from '../models/flightvm.model';
import { Routes } from '../models/routes.model';
import { SeatsType } from '../models/seat-types.model';
import { Seats } from '../models/seats.model';
import { SeatsVM } from '../models/seatvm.model';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  readonly BaseURI ='https://localhost:7120/api';



  
  getAllRoutes(): Observable<Routes[]>{
    return this.http.get<Routes[]>(this.BaseURI + '/routes');
  }

  getAllFlights(): Observable<Flights[]>{
    return this.http.get<Flights[]>(this.BaseURI + '/flights');
  }

  getAllSeat(): Observable<SeatsType[]>{
    return this.http.get<SeatsType[]>(this.BaseURI + '/seatsTypes');
  }

  getAllUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.BaseURI + '/passengers');
  }

  getFlightsByRoute(): Observable<FlightVM[]>{
    return this.http.get<FlightVM[]>(this.BaseURI + '/flights/FlightsByRoute');
  }

  getSeatsBySeatType(): Observable<SeatsVM[]>{
    return this.http.get<SeatsVM[]>(this.BaseURI + '/seats/SeatsBySeatType');
  }



  addRoute(addRoutesRequest: Routes): Observable<Routes> {
    return this.http.post<Routes>(this.BaseURI + '/routes', addRoutesRequest);
  }

  addFlight(addFlightsRequest: Flights): Observable<Flights> {
    return this.http.post<Flights>(this.BaseURI + '/flights', addFlightsRequest);
  }

  addFlightClass(addFlightClassRequest: FlightClass): Observable<FlightClass> {
    return this.http.post<FlightClass>(this.BaseURI + '/flightClasses', addFlightClassRequest);
  }

  addSeat(addSeatsRequest: Seats): Observable<Seats> {
    return this.http.post<Seats>(this.BaseURI + '/seats', addSeatsRequest);
  }

  addSeatType(addSeatTypeRequest: SeatsType): Observable<SeatsType> {
    return this.http.post<SeatsType>(this.BaseURI + '/seatsTypes', addSeatTypeRequest);
  }




  getRoute(id:string): Observable<Routes> {
    return this.http.get<Routes>(this.BaseURI + '/routes/'+ id);
  }

  getFlight(id:string): Observable<Flights> {
    return this.http.get<Flights>(this.BaseURI + '/flights/'+ id);
  }

  getFlightClass(id:string): Observable<FlightClass> {
    return this.http.get<FlightClass>(this.BaseURI + '/flightClasses/'+ id);
  }

  getSeat(id:string): Observable<Seats> {
    return this.http.get<Seats>(this.BaseURI + '/seats/'+ id);
  }

  getSeatType(id:string): Observable<SeatsType> {
    return this.http.get<SeatsType>(this.BaseURI + '/seatsTypes/'+ id);
  }


  updateRoute(id: string,  updateRouteRequest: Routes): Observable<Routes> {
    return this.http.put<Routes>(this.BaseURI + '/routes/'+ id, updateRouteRequest);
  }

  updateFlight(id: string,  updateFlightRequest: Flights): Observable<Flights> {
    return this.http.put<Flights>(this.BaseURI + '/flights/'+ id, updateFlightRequest);
  }

  updateFlightClass(id: string,  updateFlightClassRequest: FlightClass): Observable<FlightClass> {
    return this.http.put<FlightClass>(this.BaseURI + '/flightClasses/'+ id, updateFlightClassRequest);
  }

  updateSeat(id: string,  updateSeatRequest: Seats): Observable<Seats> {
    return this.http.put<Seats>(this.BaseURI + '/seats/'+ id, updateSeatRequest);
  }

  updateSeatType(id: string,  updateSeatTypeRequest: SeatsType): Observable<SeatsType> {
    return this.http.put<SeatsType>(this.BaseURI + '/seatsTypes/'+ id, updateSeatTypeRequest);
  }


  deleteRoute(id: string): Observable<Routes> {
    return this.http.delete<Routes>(this.BaseURI + '/routes/'+ id);
  }

  deleteFlight(id: string): Observable<Flights> {
    return this.http.delete<Flights>(this.BaseURI + '/flights/'+ id);
  }

  deleteSeat(id: string): Observable<Seats> {
    return this.http.delete<Seats>(this.BaseURI + '/seats/'+ id);
  }

  deleteSeatType(id: string): Observable<SeatsType> {
    return this.http.delete<SeatsType>(this.BaseURI + '/seatsTypes/'+ id);
  }

}
