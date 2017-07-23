import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:"prayas-contact-header",
    templateUrl:"./contact-header.component.html",
    styleUrls:['contact-header.component.css']
})

export class ContactHeaderComponent {
    tabSelected: string = 'home';

    constructor(private router:Router) {}

    navTabClicked (tabClicked:string) {
        if (this.tabSelected !== tabClicked) {
            this.tabSelected = tabClicked;
            this.router.navigateByUrl(tabClicked);
        }        
    }
}