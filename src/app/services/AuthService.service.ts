import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:7120/api/Flights';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    BirthDate:[''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  httpOptions = {
  
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }
    )
  }


  comparePasswords(fb: FormGroup) {
    // let confirmPswrdCtrl = fb.get('ConfirmPassword');
    // //passwordMismatch
    // //confirmPswrdCtrl.errors={passwordMismatch:true}
    // if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in $any(confirmPswrdCtrl.errors)) 
    // {
    //   if (fb.get('Password').value != confirmPswrdCtrl.value)
    //     confirmPswrdCtrl.setErrors({ passwordMismatch: true });
    //   else
    //     confirmPswrdCtrl.setErrors(null);
    // }
  }
  

  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      BirthDate:this.formModel.value.BirthDate,
      Password: this.formModel.value.Passwords.Password,
      ConfirmPassword: this.formModel.value.Passwords.ConfirmPassword
    };
    return this.http.post(this.BaseURI + '/Account/Register', body);
  }

  login(formData: any) {
    return this.http.post(this.BaseURI + '/Account/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
}