import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent implements OnInit {

  loadedPosts = [];
  LoginForm: FormGroup;
  LoginDetails: any;
  mobileNumber: string;

  constructor(private router: Router,
    private http: HttpClient,
    private _fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.LoginForm = this._fb.group({
     mobileNumber: new FormControl(this.mobileNumber ? this.LoginDetails.mobileNumber : '', Validators.required),
     OTP: new FormControl(this.LoginDetails ? this.LoginDetails.OTP : '', Validators.required),
    })
  }
  login(){
    this.router.navigateByUrl("/owner-dashboard")
  }
  

  sendOtp(postData:{mobileNumber: number;}) {
    this.http.post(
      'http://localhost:8057/api/login/verification?mobileNumber=%2B',postData
    )
    .subscribe(ResponseData =>{
      console.log(ResponseData);
    });

 }

}

