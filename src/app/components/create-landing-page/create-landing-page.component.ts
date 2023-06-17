import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,RequiredValidator,Validator,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-landing-page',
  templateUrl: './create-landing-page.component.html',
  styleUrls: ['./create-landing-page.component.scss']
})
export class CreateLandingPageComponent implements OnInit{
  public citys = ["Hyderabad","Bengaluru"];
  public travellers =[1,2,3];

  public searchform!: FormGroup;
  
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.searchform = this.fb.group({
      From:['', Validators.required] ,
      To: [''],
      Depature: [''],
      Travellers: [''],

    })
  
  }

}
