import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NOTE_INITIALIZER } from '../common/constants';
import { Note } from '../common/interfaces';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'rb-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent implements OnInit {

  notesBS = new BehaviorSubject<Note[]>([]);
  notes$: Observable<Note[]> = this.notesBS;

  selectedNoteBS = new BehaviorSubject<Note>(NOTE_INITIALIZER);
  selectedNote$: Observable<Note> = this.selectedNoteBS;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.notesBS.next(this.getNotes());
    // console.log('n ngOI notes: ', this.notesBS.value);
  }

  getNotes(): Note[] {
    return this.noteService.getNotes();
  }

  handleSelectedNote(note: Note) {
    // console.log('n hSN selected note: ', note);
    this.selectedNoteBS.next(note)
  }

}
