import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class Guard implements CanActivate{
    constructor(public auth: AuthService,public router:Router) {  }

    canActivate(
        next: ActivatedRouteSnapshot,
        state:RouterStateSnapshot):boolean{
            if(this.auth.isAuthenticated()){
                return true;
            } else{this.router.navigate(['']);
        return false;
    }
        }
    
}