import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Form } from "@angular/forms"
import { EventService } from './shared/event.service';

@Component({
    selector: "event-create",
    templateUrl: "./event-create.component.html",
    styleUrls: ["./event-create.component.css"]
})
export class CreateEventComponent {
    isDirty: any
    name: string
    date: Date
    time: string
    price: string
    address: string
    city: string
    country: string
    onlineUrl: string
    imageUrl: string

    constructor(private router: Router, private eventService: EventService){

    }

    saveEvent(formValue){
        this.eventService.saveEvent(formValue)
        this.router.navigate(["events"])
    }

    cancel(){
        this.router.navigate(["./events"]);
    }
}