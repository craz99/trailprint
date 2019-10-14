import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Ride } from '../ride';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.less']
})
export class RideDetailComponent implements OnInit {
  ride: Ride;
	
  constructor(
    private route: ActivatedRoute,
    private rideService: RideService,
    private location: Location
	) { }

  ngOnInit() {
	  this.getRide();
  }

  getRide(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.rideService.getRide(id)
	    .subscribe(ride => this.ride = ride);
  }
	
  goBack(): void {
	  this.location.back();
  }
}
