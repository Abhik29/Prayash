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
import { fadeInAnimation } from '../_animations/index';
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.viewTestimonials = function () {
        this.router.navigateByUrl('testimonials');
    };
    HomeComponent.prototype.viewGallery = function () {
        this.router.navigateByUrl('gallery');
    };
    HomeComponent = __decorate([
        Component({
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ['home.component.css'],
            animations: [fadeInAnimation],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map