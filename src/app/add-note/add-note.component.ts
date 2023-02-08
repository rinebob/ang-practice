import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../common/interfaces';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'rb-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNoteComponent {

  titleControl = new FormControl('');
  contentControl = new FormControl('');
  noteForm = new FormGroup({
    'titleControl': this.titleControl,
    'contentControl': this.contentControl,
  });

  constructor(private noteService: NoteService, private router: Router) {}

  handleFormSubmit() {
    console.log('aN hFS form: ', this.noteForm);
    console.log('aN hFS value: ', this.noteForm.value);
    const note = new Note(this.noteForm.value.titleControl ?? '', this.noteForm.value.contentControl ?? '')

    this.noteService.createNote(note);
    this.router.navigateByUrl('/notes');
  }

}
