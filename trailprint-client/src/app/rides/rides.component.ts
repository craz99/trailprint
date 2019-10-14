import { Component, OnInit } from '@angular/core';

import { Ride } from '../ride';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.less']
})
export class RidesComponent implements OnInit {
  rides: Ride[];

  constructor(private rideService: RideService) { }

  ngOnInit() {
	  this.getRides();
  }
	
  getRides(): void {
	  this.rideService.getRides()
	    .subscribe(rides => this.rides = rides);
  }
}
