import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rb-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {

}
