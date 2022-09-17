import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rote:Router) { }

  ngOnInit(): void {
  }
  onclick(){
  this.rote.navigateByUrl('/add-product')
  }
}
