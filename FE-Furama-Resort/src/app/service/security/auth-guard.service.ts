import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {TokenStorageService} from "../token/token-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router, private tokenStorageService: TokenStorageService) {
    }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.tokenStorageService.getToken() == null) {
            this.router.navigateByUrl('/login').then(r => console.log(r))
            return false;
        }
        if (this.tokenStorageService.isLogin()) {
            switch (this.tokenStorageService.getUser().role[0]) {
                case "ROLE_ADMIN":
                case "ROLE_EMPLOYEE":
                case "ROLE_USER":
                    return true;
                default:
                    this.router.navigateByUrl('/login').then(r => console.log(r))
                    return false;
            }
        }

        this.router.navigateByUrl('/login').then(r => console.log(r))
        return false

    }
}
