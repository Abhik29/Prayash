import { Component, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector:"prayas-contact-header",
    host: {
        '(document:click)': `($event.target.className !== 'fa fa-bars fa-2x') && toggleSmMenu(false)`,
    },
    templateUrl:"./contact-header.component.html",
    styleUrls:['contact-header.component.css']
})

export class ContactHeaderComponent implements OnDestroy {
    tabSelected: string = 'home';
    routeSubscribe:any;
    openMenu:boolean;

    constructor(private router:Router) {
        this.routeSubscribe=this.router.events
        .subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.tabSelected = event['url'].split('/')[1];
            }
        })
        this.openMenu = false;
    }

    navTabClicked (tabClicked:string) {
        if (this.tabSelected !== tabClicked) {
            this.tabSelected = tabClicked;
            this.router.navigateByUrl(tabClicked);
        }        
    }

    goToFaceBook() {
        window.open('https://www.facebook.com/groups/243340465790122/?notif_t=group_added_to_group&notif_id=1500930590535884');
    }

    toggleSmMenu(display:boolean): void {
        this.openMenu = display;
    }

    ngOnDestroy() {
        this.routeSubscribe.unsubscribe();
    }
}