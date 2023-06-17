import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // constructor(private router: Router) {}
  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "fa-eye-slash";

  

//   ngOnInit(): void {}

formData: any = {
  userName: '',

  password: '',

  confirmPassword:  '',

  email: '',

  fullName: '',

  birthDate : '',
};





addSignupForm: FormGroup = new FormGroup({

  userName: new FormControl(''),

  password: new FormControl(''),

  confirmpassword: new FormControl(''),

  email: new FormControl(''),

  fullName:new FormControl(''),

  birthDate : new FormControl(''),
});




submitted = false;

PasswordError=false;

ShowPasswordError=false;

// ShowPasswordError: Subject<boolean> = new Subject();

// this.ShowPasswordError.next(false);




constructor(private formBuilder: FormBuilder,private signupService: SignupService,private router: Router) { }




ngOnInit() : void {

  // this.ShowPasswordError.next(false);

  this.addSignupForm = this.formBuilder.group(

    {

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      birthDate: ['', Validators.required],

      password: [

        '',

        [

          Validators.required,

          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)

        ],

      ],

      confirmpassword: [

        '',

        [

          Validators.required,

          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)

        ]

      ]

    }

  );

}




get f(): { [key: string]: AbstractControl } {

  return this.addSignupForm.controls;

}

addSignupSubmit() {

  const { userName, password, fullName, birthDate, confirmPassword, email } = this.formData


  if(!userName){
    alert('UserName is required')
    return 
  }else if(!password){
    alert('Password is Required')
    return 
  }else if(!confirmPassword){
    return
  }else if(password !== confirmPassword){
    alert("Confirmpassword dosn't match with the actual password!")
    return
  }else if(!fullName){
    alert('FullName is Required')
    return 
  }else if(!birthDate){
    alert('birthdate is Required')
    return 
  }else if(!fullName){
    alert('FullName is Required')
    return 
  }

  try{
    this.signupService.addPassService({ pass: this.formData })
    .subscribe((data) => {
    console.log(data);
     alert('Logged in sucessfully!')
    })
  }catch(error){
    alert('Validation Error occurred!')
  }
  
  this.router.navigate(['/login']);
  

}

hideShowPass() {
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}
}
