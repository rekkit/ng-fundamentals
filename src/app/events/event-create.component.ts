import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "event-create",
    templateUrl: "./event-create.component.html"
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private router: Router){

    }

    cancel(){
        this.router.navigate(["./events"]);
    }
}