import { Component, OnInit } from '@angular/core';
import{
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Form,
  Validators,
} from '@angular/forms'

import { TransactionService } from './transaction.service';
//declare var window:any

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit{

  addtransactionform: FormGroup;
  
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,private transactionService:TransactionService){}

  //formModal:any

  ngOnInit(): void { 
    this.addtransactionform = new FormGroup({
      accountNo: new FormControl(''),
      card: new FormControl(''),
      passengerId: new FormControl(''),
  
    });
  }
addtransactionSubmit(){
  console.log("Add Transaction Submit");
    console.log(this.addtransactionform.value);
    //console.log(JSON.stringify(this.addpassengersform.value, null, 2));
    this.transactionService.addtransactionService(this.addtransactionform.value)
      .subscribe(data => {
        console.log(data)
      })

    this.addtransactionform.reset();
    alert("Transaction successfull");
    this.submitted = false;
}  
}
