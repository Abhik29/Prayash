import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({ visibility: 'hidden' }),

            // animation and styles at end of transition
            animate('3s ease-in', style({ visibility: 'visible' }))
        ]),
    ]);