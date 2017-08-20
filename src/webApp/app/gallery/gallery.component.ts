import { Component, ViewChild } from '@angular/core';

import { EnlargeImageComponent } from '../common/component/enlarge-image/enlarge-image.component';

@Component({
    selector:'gallery',
    templateUrl:'./gallery.component.html',
    styleUrls:['gallery.component.css']
})
export class GalleryComponent{
    enlargeImageFile:string;
    ref:string = '/assets/';

    @ViewChild(EnlargeImageComponent) enlargeImageChild: EnlargeImageComponent;
    gallery:any[]=[
        {"description":"A Session Of Music","file":"img1.JPG"},
        {"description":"Art Competition on Blood Donation Camp","file":"img2.jpeg"},
        {"description":"Celebration of World Environment Day","file":"img3.jpeg"},
        {"description":"Chorous Songs Rehearsal","file":"img4.jpeg"},
        {"description":"Counselling Session with Parents By Child Nutritionist","file":"img5.jpeg"},
        {"description":"Craft Session","file":"img6.jpeg"},
        {"description":"Demostration of Craft","file":"img7.jpeg"},
        {"description":"Free Health Check Up in Association with SRL Cherish","file":"img8.jpeg"},
        {"description":"Getting Knowledge of Tree Plantation","file":"img9.jpeg"},
        {"description":"Glimpse of Shilpi Diwas","file":"img10.jpeg"},
        {"description":"Inaguaration of Art Competition","file":"img11.jpeg"},
        {"description":"Learning Magic Tricks", "file":"img12.jpeg"},
        {"description":"Mathematical Game", "file":"img13.jpeg"},
        {"description":"Rabindra Nazrul Sandhya", "file":"img14.jpeg"},
        {"description":"Rabindra Sandhya", "file":"img15.jpeg"},
        {"description":"Yoga Session", "file":"img16.jpeg"}
    ];

    enlargeImage(imageObj: any) {
        this.enlargeImageChild.showImage(imageObj);
    }
}