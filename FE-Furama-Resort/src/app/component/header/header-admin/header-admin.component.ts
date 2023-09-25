import {Component} from '@angular/core';
import {TokenStorageService} from "../../../service/token/token-storage.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header-admin',
    templateUrl: './header-admin.component.html',
    styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {
    constructor(private tokenStorage: TokenStorageService,
                private router: Router) {
    }

    logout() {
        this.tokenStorage.singOut();
        this.router.navigateByUrl('/login')

    }
}
