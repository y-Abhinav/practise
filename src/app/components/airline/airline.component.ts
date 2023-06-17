import { Component, ViewChild } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  flightId: string;
  flightName: string;
  flightStatus: string;
  destination: string;
  source: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  amount: string;
  routeId: string;
}

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent {

  displayedColumns: string[] = [
    //'flightId', 
    'flightName', 
    'flightStatus', 
    'departureTime', 
    'arrivalTime',
    'source',
    'destination',
    'duration',
    'amount',
    //'routeId'
  ];

  dataSource!: MatTableDataSource<UserData>;
  posts: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: TableService) {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.posts = data;

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }
  
}
