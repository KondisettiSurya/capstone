import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private rote:Router) { }

  ngOnInit(): void {
  }

  onclick(){
  this.rote.navigateByUrl('/under-maintance')
  }
}
