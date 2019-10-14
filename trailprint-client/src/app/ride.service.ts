import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Ride } from './ride';
import { RIDES } from './mock-rides';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class RideService {
  constructor(private messageService: MessageService) { }
	
  getRides(): Observable<Ride[]> {
	this.messageService.add('RideService: fetched rides');
	return of(RIDES);
  }
	
  getRide(id: number): Observable<Ride> {
	  this.messageService.add(`RideService: fetched ride id=${id}`);
	  return of(RIDES.find(ride => ride.id === id));
  }
}
