var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
var TouchToScroll = (function () {
    function TouchToScroll(elRef, renderer2) {
        this.elRef = elRef;
        this.renderer2 = renderer2;
        console.log(elRef);
    }
    TouchToScroll.prototype.ngAfterViewInit = function () {
        var description = this.elRef.nativeElement.innerHTML;
        this.elRef.nativeElement.innerHTML = '';
        this.renderer2.addClass(this.elRef.nativeElement, 'ellipse-container');
        this.spanElement = this.renderer2.createElement('span');
        this.spanElement.innerHTML = description;
        console.log('innertext', this.spanElement.offsetWidth);
        console.log('outertext', this.elRef.nativeElement.offsetWidth);
        this.renderer2.appendChild(this.elRef.nativeElement, this.spanElement);
        //this would be based on width comparison
        this.scrollNeeded = true;
        this.percentageScroll = 80;
    };
    TouchToScroll.prototype.onTouch = function () {
        this.renderer2.addClass(this.elRef.nativeElement, 'scroll-container');
        this.renderer2.setStyle(this.spanElement, 'transform', "translateX(" + this.percentageScroll + "%)");
    };
    TouchToScroll.prototype.onUntouch = function () {
        this.renderer2.removeClass(this.elRef.nativeElement, 'scroll-container');
        this.renderer2.removeStyle(this.spanElement, 'transform');
    };
    TouchToScroll.prototype.ngOnDestroy = function () {
        //this should be automatically handled, but as a safe side
        this.spanElement = null;
    };
    __decorate([
        HostListener('touchstart'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TouchToScroll.prototype, "onTouch", null);
    __decorate([
        HostListener('touchend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TouchToScroll.prototype, "onUntouch", null);
    TouchToScroll = __decorate([
        Directive({
            selector: '[touchToScroll]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], TouchToScroll);
    return TouchToScroll;
}());
export { TouchToScroll };
//# sourceMappingURL=touch-to-scroll.js.map