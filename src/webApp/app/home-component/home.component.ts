import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../_animations/index';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls: [ 'home.component.css' ],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent{
    constructor(private router:Router) {

    }
    viewTestimonials () {
        this.router.navigateByUrl('testimonials');
    }

    viewGallery () {
        this.router.navigateByUrl('gallery');
    }
}