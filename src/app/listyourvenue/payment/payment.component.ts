import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  var_one: any;
  insertStatus: any;

  constructor(private router: Router,private payment:PaymentService) { }

  ngOnInit(): void {
  }
  public insert(obj: any): any {
    this.payment.addPayment(obj).subscribe((posRes) => {
      if (posRes.insert == "success") {
        this.var_one.push(obj);
      }
      this.insertStatus = posRes;
    })
  }
  
  back() {
    this.router.navigateByUrl("/security")
  }

  next() {
    this.router.navigateByUrl("/form")
  }

}
