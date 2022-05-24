import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    constructor(public jwtHelper: JwtHelperService) {
    }
    
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('user');
        return token != null;
    }
}