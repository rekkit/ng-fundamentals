import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    Error404Component,
    EventDetailsComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    { 
      provide: "canDeactivateCreateEvent" ,
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if (component.isDirty){
    return window.confirm("You have not saved this event. Are you sure you want to leave?");
  }

  return true;
}
