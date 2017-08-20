var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { EnlargeImageComponent } from '../common/component/enlarge-image/enlarge-image.component';
var GalleryComponent = (function () {
    function GalleryComponent() {
        this.ref = '/assets/';
        this.gallery = [
            { "description": "A Session Of Music", "file": "img1.JPG" },
            { "description": "Art Competition on Blood Donation Camp", "file": "img2.jpeg" },
            { "description": "Celebration of World Environment Day", "file": "img3.jpeg" },
            { "description": "Chorous Songs Rehearsal", "file": "img4.jpeg" },
            { "description": "Counselling Session with Parents By Child Nutritionist", "file": "img5.jpeg" },
            { "description": "Craft Session", "file": "img6.jpeg" },
            { "description": "Demostration of Craft", "file": "img7.jpeg" },
            { "description": "Free Health Check Up in Association with SRL Cherish", "file": "img8.jpeg" },
            { "description": "Getting Knowledge of Tree Plantation", "file": "img9.jpeg" },
            { "description": "Glimpse of Shilpi Diwas", "file": "img10.jpeg" },
            { "description": "Inaguaration of Art Competition", "file": "img11.jpeg" },
            { "description": "Learning Magic Tricks", "file": "img12.jpeg" },
            { "description": "Mathematical Game", "file": "img13.jpeg" },
            { "description": "Rabindra Nazrul Sandhya", "file": "img14.jpeg" },
            { "description": "Rabindra Sandhya", "file": "img15.jpeg" },
            { "description": "Yoga Session", "file": "img16.jpeg" }
        ];
    }
    GalleryComponent.prototype.enlargeImage = function (imageObj) {
        this.enlargeImageChild.showImage(imageObj);
    };
    __decorate([
        ViewChild(EnlargeImageComponent),
        __metadata("design:type", EnlargeImageComponent)
    ], GalleryComponent.prototype, "enlargeImageChild", void 0);
    GalleryComponent = __decorate([
        Component({
            selector: 'gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['gallery.component.css']
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
export { GalleryComponent };
//# sourceMappingURL=gallery.component.js.map