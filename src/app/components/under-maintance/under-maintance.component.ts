import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under-maintance',
  templateUrl: './under-maintance.component.html',
  styleUrls: ['./under-maintance.component.css']
})
export class UnderMaintanceComponent implements OnInit {

  constructor(private rote:Router) { }

  ngOnInit(): void {
  }


  main(){
   this.rote.navigateByUrl('');
  }
}
