import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import { AuthService } from './auth.service';

@Component({
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    // userName: FormControl;
    // password: FormControl;
    // loginFormGroup: FormGroup;

    userName;
    password;

    constructor(private authService: AuthService, private router: Router){

    }

    login(formValues){
        console.log("Form values: ", formValues)
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(["events"])
    }

    cancel(){
        this.router.navigate(["events"])
    }
}