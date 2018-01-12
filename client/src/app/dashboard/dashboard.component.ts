import { Component, OnInit } from '@angular/core';
import { BucketService } from './../bucket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  buckets;
  id;
  constructor(private router: Router, private _bucketService: BucketService) { }


  ngOnInit() {
    this._bucketService.getAllBucket((data) => {
      // console.log(data);
      this.buckets = data.buckets;
      this.id = data.id;
      console.log(this.buckets);
    })
  }


}
