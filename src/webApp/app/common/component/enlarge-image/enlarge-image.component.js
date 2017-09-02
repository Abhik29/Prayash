var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, trigger, transition, style, animate } from '@angular/core';
var EnlargeImageComponent = (function () {
    function EnlargeImageComponent() {
    }
    EnlargeImageComponent.prototype.close = function () {
        this.fileEven = '';
        this.fileOdd = '';
        this.imageObj = {};
    };
    EnlargeImageComponent.prototype.showImage = function (imageObj) {
        this.imageObj = imageObj;
        if (this.imageList.indexOf(imageObj) % 2 === 0) {
            this.fileEven = imageObj.file;
        }
        else {
            this.fileOdd = imageObj.file;
        }
    };
    EnlargeImageComponent.prototype.changeImage = function (direction) {
        var imageIdx = this.imageList.indexOf(this.imageObj), imageObj;
        if (direction > 0) {
            if ((imageIdx + 1) === this.imageList.length) {
                imageObj = this.imageList[0];
            }
            else {
                imageObj = this.imageList[imageIdx + 1];
            }
        }
        else {
            if (imageIdx === 0) {
                imageObj = this.imageList[this.imageList.length - 1];
            }
            else {
                imageObj = this.imageList[imageIdx - 1];
            }
        }
        this.showImage(imageObj);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EnlargeImageComponent.prototype, "referenceUrl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], EnlargeImageComponent.prototype, "imageList", void 0);
    EnlargeImageComponent = __decorate([
        Component({
            selector: 'enlarge-image',
            templateUrl: 'enlarge-image.component.html',
            styleUrls: ['./enlarge-image.component.css'],
            animations: [
                trigger('myAnimation', [
                    transition(':enter', [
                        style({ opacity: 0 }),
                        animate('300ms', style({ 'opacity': 1 }))
                    ]),
                    transition(':leave', [
                        style({ opacity: 1 }),
                        animate('100ms', style({ 'opacity': 0 })),
                    ])
                ])
            ],
        })
    ], EnlargeImageComponent);
    return EnlargeImageComponent;
}());
export { EnlargeImageComponent };
//# sourceMappingURL=enlarge-image.component.js.map