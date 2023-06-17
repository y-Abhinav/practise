import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // constructor(private router: Router) {}
  type:string = "password";
  isText:boolean = true;
  eyeIcon:string = "fa-eye-slash";


//   ngOnInit(): void {}

formData: any = {
  userName: '',

  password: '',

};


addLoginForm: FormGroup = new FormGroup({

  userName: new FormControl(''),

  password: new FormControl(''),
});




submitted = false;

PasswordError=false;

// ShowPasswordError=false;

// ShowPasswordError: Subject<boolean> = new Subject();

// this.ShowPasswordError.next(false);




constructor(private formBuilder: FormBuilder,private loginService: LoginService,private router: Router) { }




ngOnInit() : void {

  // this.ShowPasswordError.next(false);

  this.addLoginForm = this.formBuilder.group(

    {

      userName: ['', Validators.required],

      password: [

        '',

        [

          Validators.required,

          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)

        ],

      ],


    }

  );

}




get f(): { [key: string]: AbstractControl } {

  return this.addLoginForm.controls;

}

addLoginSubmit() {


  try{
    this.loginService.addLogService({ log: this.formData })
    .subscribe((data) => {
    console.log(data);
     alert('Logged in sucessfully!')
     
  this.router.navigate(['/passengers']);
    })
  }catch(error){
    alert('Validation Error occurred!')
  }
  
  

}

hideShowPass() {
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}
}
