import { Injectable } from "@angular/core";
import { IUser } from './user.model';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
    currentUser: IUser

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: "Vukasin",
            lastName: "Jovic",
            userName: "vjovic"
        }
    }

    updateUserInfo(firstName: string, lastName: string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    isUserLoggedIn(){
        return !!this.currentUser
    }
}