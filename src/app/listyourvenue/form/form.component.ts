import { FormService } from './form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  form = new FormGroup({
    lastName: new FormControl('', Validators.required)
  });
   
  UserData = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    functionhallsname: null,
    address: null,
    address_2: null,
    city: null,
    state: null,
    zip: null
  }
  var_one: any;
  insertStatus: any;


  constructor(private router: Router, private formsvc: FormService) { }

  get lastname(){
    return this.form.get('lastname')
  }

  ngOnInit(): void {
  }
  public insert(obj: any): any {
    this.formsvc.addform(obj).subscribe((posRes) => {
      if (posRes.insert == "success") {
        this.var_one.push(obj);
      }
      this.insertStatus = posRes;
    })
  }
  onSubmit(){
    alert (JSON.stringify(this.form.value));
  }

  back() {
    this.router.navigateByUrl("/payment")
  }

  onclick() {
    this.router.navigateByUrl("/paymentdetails")
    console.log(this.UserData)
  }


}
