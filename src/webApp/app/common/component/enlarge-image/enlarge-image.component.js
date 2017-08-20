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
        this.file = '';
        this.imageObj = {};
    };
    EnlargeImageComponent.prototype.showImage = function (imageObj) {
        this.file = imageObj.file;
        this.imageObj = imageObj;
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EnlargeImageComponent.prototype, "referenceUrl", void 0);
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