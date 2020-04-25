import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, IToastr } from "../common/toastr.service"

@Component({
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
    firstName: FormControl
    lastName: FormControl
    profileForm: FormGroup

    constructor(
        private authService: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: IToastr
    ){

    }

    ngOnInit(){
        this.firstName = new FormControl(
            this.authService.currentUser.firstName,
            [
                Validators.required,                
                Validators.pattern("[a-zA-z]+")
            ]
        )

        this.lastName = new FormControl(
            this.authService.currentUser.lastName,
            [
                Validators.required,
                Validators.pattern("[a-zA-z]+")
            ]
        )

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        })
    }

    saveUserDetails(formValue){
        if (this.profileForm.valid){
            this.authService.updateUserInfo(formValue.firstName, formValue.lastName)
            this.toastr.success("Successfully updated user details.")
        }
    }

    isFirstNameValid(){
        return this.firstName.valid || this.firstName.untouched
    }

    isLastNameValid(){
        return this.lastName.valid || this.lastName.untouched
    }

    cancel(){
        this.router.navigate(["events"])
    }
}