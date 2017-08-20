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
            animate('100ms', style({'opacity': 0})),
        ]
        )
      ]
    )
  ],
})

export class EnlargeImageComponent {
    @Input() 
    referenceUrl: string;

    file: string;
    imageObj: any;

    private close() {
        this.file = '';
        this.imageObj = {};
    }

    showImage(imageObj: any) {
        this.file = imageObj.file;
        this.imageObj = imageObj;
    }
}