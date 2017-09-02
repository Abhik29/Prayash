import { Component, Input, trigger, transition, style, animate, state } from '@angular/core';

@Component({
    selector: 'enlarge-image',
    templateUrl: 'enlarge-image.component.html',
    styleUrls: ['./enlarge-image.component.css'],
    animations: [
    trigger(
      'myAnimation',
      [
        transition(
            ':enter', [
                style({opacity: 0}),
                animate('300ms', style({'opacity': 1}))
            ]
        ),
      transition(
        ':leave', [
            style({opacity: 1}),
            animate('300ms', style({'opacity': 0})),
        ]
        )
      ]
    )
  ],
})

export class EnlargeImageComponent {
    @Input() 
    referenceUrl: string;
    @Input()
    imageList: any[];
    fileEven: string;
    fileOdd: string;
    imageObj: any;
    imageIndex: number;

    private close() {
        this.fileEven = '';
        this.fileOdd = '';
        this.imageObj = {};
    }

    showImage(imageObj: any) {
        
        this.imageObj = imageObj;
        this.imageIndex = this.imageList.indexOf(imageObj);
        if (this.imageIndex%2 === 0) {
            this.fileOdd = '';
            this.fileEven = imageObj.file;
        } else {
            this.fileEven = '';
            this.fileOdd = imageObj.file;
        }
    }
    changeImage(direction: number) {
        let imageIdx = this.imageList.indexOf(this.imageObj),
        imageObj: any;
        if (direction > 0) {
            if ((imageIdx+1) === this.imageList.length) {
                imageObj = this.imageList[0];
            } else {
                imageObj = this.imageList[imageIdx+1];
            }
        } else {
            if (imageIdx === 0) {
                imageObj = this.imageList[this.imageList.length-1];
            } else {
                imageObj = this.imageList[imageIdx-1];
            }
        }

        this.showImage(imageObj);
    }
}