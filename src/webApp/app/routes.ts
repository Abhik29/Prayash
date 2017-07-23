import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';

export const AppRoutes: Routes= [
    { path: '',pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'contact', component: ContactUsComponent }
];