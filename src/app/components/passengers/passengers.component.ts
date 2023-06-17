import { Component, OnInit , OnDestroy} from '@angular/core';
import{
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms'

import { Subscription } from 'rxjs';
import {IPassengers} from "./list";
import { PassengersService } from './passengers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  addpassengersform: FormGroup;
  
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,private passengersService:PassengersService, private router: Router){}

  //addpassengersSubmit: any;

  
ngOnInit(): void {
  this.addpassengersform = new FormGroup({
    passengerName: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    contact: new FormControl('')

  });
}
addpassengersSubmit(){

    // this.submitted = true;
    // if(this.addpassengersform.invalid) {

    //   return;

    // }
    console.log("Add Passengers Submit");
    console.log(this.addpassengersform.value);
    //console.log(JSON.stringify(this.addpassengersform.value, null, 2));
    this.passengersService.addpassengersService({...this.addpassengersform.value, passenger: 'Abhi'})
      .subscribe(data => {
        console.log(data)
      })

    this.addpassengersform.reset();
    alert("Passenger added successfully");
    this.submitted = false;
    this.router.navigateByUrl('/seat');
  }

}
