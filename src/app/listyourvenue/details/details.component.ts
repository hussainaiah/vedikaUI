import { DetailsService } from './details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  var_one: any;
  insertStatus: any;

  constructor(private router: Router,private details:DetailsService) { }

  ngOnInit(): void {
  }
  public insert(obj: any): any {
    this.details.addDetails(obj).subscribe((posRes) => {
      if (posRes.insert == "success") {
        this.var_one.push(obj);
      }
      this.insertStatus = posRes;
    })
  }


  form = new FormGroup({

    Headline: new FormControl('', Validators.required),
    Functionhalltype: new FormControl('', Validators.required),

  });

  get Headline(){
    return this.form.get('Headline')
  }
  get Functionhalltype(){
    return this.form.get("Functionhalltype")
  }
  back(){
    this.router.navigateByUrl("/location")
  }

  next(){
    this.router.navigateByUrl("/photos")
  }

}
