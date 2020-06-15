import { LocationService } from './location.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  UserData = {
    streetaddress: null,
    unitnumber: null,
    state: null,
    city: null,
    postalcode: null
  }
  var_one: any;
  insertStatus: any;

  constructor(private router: Router,
    private locser:LocationService) { }

  ngOnInit(){}

    public insert(obj: any): any {
    this.locser.addLocation(obj).subscribe((posRes) => {
      if (posRes.insert == "success") {
        this.var_one.push(obj);
      }
      this.insertStatus = posRes;
    })
  }

  
  form = new FormGroup({
    
    Streetaddress: new FormControl('', Validators.required), 
    State: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Postalcode: new FormControl('', Validators.required),
  });
 

  get Streetaddress() {
    return this.form.get('streetaddress')
  }
  
  get State() {
    return this.form.get('state')
  }
  get City() {
    return this.form.get('city')
  }
  get Postalcode() {
    return this.form.get('postalcode')
  }



  back(){
    this.router.navigateByUrl("/dashboard")
  }

  onclick(){
    this.router.navigateByUrl("/details")
    console.log(this.UserData)
  }

}
