import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  res:any;

  constructor(private cserv:CommonService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params['Id'];
    this.getResults();
  }
getResults(){
  this.cserv.getResult(this.Id).subscribe((response)=>{
    this.res=response
  })
}
}
