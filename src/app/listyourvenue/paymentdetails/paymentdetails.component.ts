import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentdetailsService } from './paymentdetails.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
  var_one: any;
  insertStatus: any;

  constructor(private router: Router,private paymentdetails:PaymentdetailsService ) { }

  ngOnInit(): void {
  }
  public insert(obj: any): any {
    this.paymentdetails.addPaymentDetails(obj).subscribe((posRes) => {
      if (posRes.insert == "success") {
        this.var_one.push(obj);
      }
      this.insertStatus = posRes;
    })
  }
  back() {
    this.router.navigateByUrl("/form")
  }

  submit() {
    this.router.navigateByUrl("/header")
  }
}
