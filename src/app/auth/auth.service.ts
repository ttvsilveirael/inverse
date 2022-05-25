import { Injectable } from "@angular/core";
@Injectable()
export class authService{
    constructor(){

    }
    public isAuthenticated(): boolean{
        const token = localStorage.getItem('user');
        return token != null;
    }
}