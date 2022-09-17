import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Models/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
payments:Payment=new Payment();  
  constructor(private route:Router,private service:PaymentService) { }

  ngOnInit(): void {
  }

  payment(){
    this.service.paymentDetails(this.payments).subscribe((data)=>{
      alert('successfully inserted');
     
    });
    this.route.navigateByUrl('/success');
  }
}
