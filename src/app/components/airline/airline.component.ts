import { Component, ViewChild } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';

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
  public toCitys = ["Hyderabad","Banglore", "Kolkata", "Goa"];
  public fromCitys = ["Hyderabad","Banglore", "Kolkata", "Goa"];
  public travellers =[1,2,3];

  
formData: any = {
  from: '',

  to: '',

};

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

  onFromSelectionChange(){

   const value = this.formData.from
   const arr = ["Hyderabad","Banglore", "Kolkata", "Goa"];
   this.toCitys = arr.filter(item => item !== value)
  }

  onToSelectionChange(){

    const value = this.formData.to
    const arr =["Hyderabad","Banglore", "Kolkata", "Goa"];
    this.fromCitys = arr.filter(item => item !== value)
   }

  addSubmit() {

    const fromCity = this.formData.from;
    const toCity = this.formData.to;

    if(!fromCity){
      alert("Please select From city!")
      return
    }else if(!toCity){
      alert("Please select to city")
      return
    }
   

    const filteredData = this.posts.filter((ele: any) => {
      console.log(ele);
      
   if( ele.source.toLowerCase().trim() === fromCity.toLowerCase().trim() && ele.destination.toLowerCase().trim() === toCity.toLowerCase().trim()){
     return ele
   }
    })

    console.log(filteredData);
    

    this.dataSource = new MatTableDataSource(filteredData);
   
   
    // try{
      
    // }catch(error){
    //   alert('Validation Error occurred!')
    // }
    
    
  
  }
  
  
}
