import {NgModule} from '@angular/core';
import {SlidebarComponent} from './slidebar.component';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        SlidebarComponent,
    ],
    imports: [
        CommonModule,
        RouterLink,
    ],
    exports: [
        SlidebarComponent
    ]
})
export class SlidebarModule {
}
