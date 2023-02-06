import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeAnim', [
      // increment - only run this animation when tab number increases
      transition(':increment', [
        // phase transition - leaving comp fades out
        // entering comp fades in

        // needed to properly position animations in ui.  targets the host element
        style({
          overflow: 'hidden',
          position: 'relative',
        }),

        // first, position enter and leave as position absolute so they overlay instead 
        // stacking
        // width keeps proper centering 
        // height necessary to prevent overflow
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }),
        ], {optional: true}),

        // group the leave and enter animations so they occur simultaneously
        group([
          // phase transition - fade out
          // query the leaving component, and animate it to
          // opacity 0
          query(':leave', [
            animate('250ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-50px)',
            })),
          ], {optional: true}),

          // phase transition - fade in
          // query the entering component, set it to opacity zero and 50px right
          // animate it back to normal
          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(50px)',
            }),
            animate('250ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)',
            })),
          ], {optional: true}),

        ]),

        
      ]),
      
      // decrement - only run this animation when tab number decreases
      transition(':decrement', [
        // phase transition - leaving comp fades out
        // entering comp fades in

        // needed to properly position animations in ui.  targets the host element
        style({
          overflow: 'hidden',
          position: 'relative',
        }),

        // first, position enter and leave as position absolute so they overlay instead 
        // stacking
        // width keeps proper centering 
        // height necessary to prevent overflow
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
          }),
        ], {optional: true}),

        // group the leave and enter animations so they occur simultaneously
        group([
          // phase transition - fade out
          // query the leaving component, and animate it to
          // opacity 0
          query(':leave', [
            animate('250ms ease-in', style({
              opacity: 0,
              transform: 'translateX(50px)',
            })),
          ], {optional: true}),

          // phase transition - fade in
          // query the entering component, set it to opacity zero and 50px right
          // animate it back to normal
          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(-50px)',
            }),
            animate('250ms 100ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)',
            })),
          ], {optional: true}),

        ]),

        
      ])
    ])
  ],
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      // return the number of the button being clicked
      return outlet.activatedRouteData['tab'];
    } else {
      return '';
    }
  }

title = '11:11';
  subtitle = '2 February 2023'

}
