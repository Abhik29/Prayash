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
import { Router } from '@angular/router';
var ContactHeaderComponent = (function () {
    function ContactHeaderComponent(router) {
        this.router = router;
        this.tabSelected = 'home';
    }
    ContactHeaderComponent.prototype.navTabClicked = function (tabClicked) {
        if (this.tabSelected !== tabClicked) {
            this.tabSelected = tabClicked;
            this.router.navigateByUrl(tabClicked);
        }
    };
    ContactHeaderComponent = __decorate([
        Component({
            selector: "prayas-contact-header",
            templateUrl: "./contact-header.component.html",
            styleUrls: ['contact-header.component.css']
        }),
        __metadata("design:paramtypes", [Router])
    ], ContactHeaderComponent);
    return ContactHeaderComponent;
}());
export { ContactHeaderComponent };
//# sourceMappingURL=contact-header.component.js.map