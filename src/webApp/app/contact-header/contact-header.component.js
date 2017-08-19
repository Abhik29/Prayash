var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
var ContactHeaderComponent = (function () {
    function ContactHeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.tabSelected = 'home';
        this.routeSubscribe = this.router.events
            .subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.tabSelected = event['url'].split('/')[1];
            }
        });
        this.openMenu = false;
    }
    ContactHeaderComponent.prototype.navTabClicked = function (tabClicked) {
        if (this.tabSelected !== tabClicked) {
            this.tabSelected = tabClicked;
            this.router.navigateByUrl(tabClicked);
        }
    };
    ContactHeaderComponent.prototype.goToFaceBook = function () {
        window.open('https://www.facebook.com/groups/243340465790122/?notif_t=group_added_to_group&notif_id=1500930590535884');
    };
    ContactHeaderComponent.prototype.toggleSmMenu = function (display) {
        this.openMenu = display;
    };
    ContactHeaderComponent.prototype.ngOnDestroy = function () {
        this.routeSubscribe.unsubscribe();
    };
    ContactHeaderComponent = __decorate([
        Component({
            selector: "prayas-contact-header",
            host: {
                '(document:click)': "($event.target.className !== 'fa fa-bars') && toggleSmMenu(false)",
            },
            templateUrl: "./contact-header.component.html",
            styleUrls: ['contact-header.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], ContactHeaderComponent);
    return ContactHeaderComponent;
}());
export { ContactHeaderComponent };
//# sourceMappingURL=contact-header.component.js.map