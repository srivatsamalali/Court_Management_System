import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  f:FormGroup;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.f=new FormGroup({
      Id:new FormControl('')
    })
  }
  onClick(f:any){
    localStorage.setItem("Id", f.Id);
    console.log(f.Id);
    this.router.navigate(["details"]);
  }

}
