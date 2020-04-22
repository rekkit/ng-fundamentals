import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: "./events-list.component.html"
})
export class EventListComponent implements OnInit {
    events;

    constructor(
        private toastr: ToastrService, 
        private route: ActivatedRoute){
        
        this.events = this.route.snapshot.data["events"];
    }

    ngOnInit(){

    }

    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }
}