import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from '../common/interfaces';
import { NOTE_INITIALIZER } from '../common/constants';

@Component({
  selector: 'rb-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteCardComponent {

  @Input() note: Note = NOTE_INITIALIZER;

  // id of the note that gets clicked on
  @Output() selectedNote = new EventEmitter<Note>();

  handleNoteSelection(note: Note) {
    // console.log('nC hSN selected note: ', note);
    this.selectedNote.emit(note);
  }

}
