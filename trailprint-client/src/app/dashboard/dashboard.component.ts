import { Component, OnInit } from '@angular/core';

import { Ride } from '../ride';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  rides: Ride[] = [];
  constructor(private rideService: RideService) { }

  ngOnInit() {
	this.getRides();
  }
	
  getRides(): void {
    this.rideService.getRides()
	    .subscribe(rides => this.rides = rides.slice(0,5));
  }
}
