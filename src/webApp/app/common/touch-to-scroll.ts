import {Directive, ElementRef, HostListener, Renderer, AfterViewInit, Renderer2, OnDestroy} from '@angular/core';

@Directive({
    selector:'[touchToScroll]'
})
export class TouchToScroll implements AfterViewInit, OnDestroy {
    spanElement:any;
    scrollNeeded:boolean;
    percentageScroll:number;
    constructor(private elRef: ElementRef, private renderer2:Renderer2) {
        console.log(elRef);
    }

    ngAfterViewInit() {
        let description = this.elRef.nativeElement.innerHTML;
        this.elRef.nativeElement.innerHTML = '';
        this.renderer2.addClass(this.elRef.nativeElement,'ellipse-container');
        this.spanElement = this.renderer2.createElement('span');
        this.spanElement.innerHTML = description;
        console.log('innertext',this.spanElement.offsetWidth);
        console.log('outertext',this.elRef.nativeElement.offsetWidth);
        this.renderer2.appendChild(this.elRef.nativeElement,this.spanElement);

        //this would be based on width comparison
        this.scrollNeeded = true;
        this.percentageScroll = 80;
        
    }

    @HostListener('touchstart') onTouch() {
        this.renderer2.addClass(this.elRef.nativeElement,'scroll-container');
        this.renderer2.setStyle(this.spanElement,'transform',`translateX(${this.percentageScroll}%)`);
    }

    @HostListener('touchend') onUntouch() {
        this.renderer2.removeClass(this.elRef.nativeElement,'scroll-container');
        this.renderer2.removeStyle(this.spanElement,'transform')
    }

    ngOnDestroy() {
        //this should be automatically handled, but as a safe side
        this.spanElement = null;
    }
}