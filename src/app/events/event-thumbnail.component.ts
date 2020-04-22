import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left: 5; }
    `]
})
export class EventThumbnailComponent{
    @Input() event: any;

    getTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
    }
}