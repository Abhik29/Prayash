import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector:"prayas-contact-header",
    templateUrl:"./contact-header.component.html",
    styleUrls:['contact-header.component.css']
})

export class ContactHeaderComponent implements OnDestroy {
    tabSelected: string = 'home';
    routeSubscribe:any;

    constructor(private router:Router) {
        this.routeSubscribe=this.router.events
        .subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.tabSelected = event['url'].split('/')[1];
            }
        })
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

    ngOnDestroy() {
        this.routeSubscribe.unsubscribe();
    }
}