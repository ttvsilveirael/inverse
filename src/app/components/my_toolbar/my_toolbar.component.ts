import { Component } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
    selector: 'my-toolbar',
    templateUrl: './my_toolbar.component.html',
    styleUrls: ['./my_toolbar.component.scss']
})
export class MyToolbarComponent {
    constructor(public auth: AuthService) { }

    get isLogged(): boolean {
        return this.auth.isAuthenticated()
    }

    logout(){
        localStorage.clear();
    }
}