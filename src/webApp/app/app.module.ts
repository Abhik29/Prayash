import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppRoutes } from './routes';

import { AppComponent }  from './app.component';
import { ContactHeaderComponent } from "./contact-header/contact-header.component";
import { HomeComponent} from "./home-component/home.component";
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';

//common components
import { EnlargeImageComponent } from './common/component/enlarge-image/enlarge-image.component';

//include later
//import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppRoutes), BrowserAnimationsModule ],
  declarations: [ AppComponent, 
                  ContactHeaderComponent,
                  HomeComponent, 
                  TestimonialsComponent, 
                  ContactUsComponent,
                  AboutUsComponent,
                  GalleryComponent,
                  FooterComponent,
                  EnlargeImageComponent
                  ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
