import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Note } from '../common/interfaces';
import { NOTE_INITIALIZER } from '../common/constants';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'rb-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteCardComponent {

  @Input()
  set note(note: Note) {
    this.noteBS.next(note);
  }
  get note() {
    return this.noteBS.value;
  }
  noteBS = new BehaviorSubject<Note>(NOTE_INITIALIZER);

  @Output() selectedNote = new EventEmitter<Note>();

  handleNoteSelection(note: Note) {
    // console.log('nC hSN selected note: ', note);
    this.selectedNote.emit(note);
  }

}
