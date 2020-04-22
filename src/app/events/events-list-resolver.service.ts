import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class EventListResolver implements Resolve<any> {
    constructor (private eventService: EventService){

    }

    resolve(): Observable<any> {
        return this.eventService.getEvents().pipe(
            map(events => events)
        )
    }
}