import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'rb-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNoteComponent {
  titleControl = new FormControl('', Validators.required);
  contentControl = new FormControl('', Validators.required);
  noteForm = new FormGroup({
    'titleControl': this.titleControl,
    'contentControl': this.contentControl,
  });

  constructor(private noteService: NoteService, readonly router: Router) {}

  handleFormSubmit() {
    const note = {
      title: this.noteForm.value.titleControl ?? '',
      content: this.noteForm.value.contentControl ?? '',
    };
    this.noteService.createNote(note);
    this.router.navigateByUrl('/notes');
  }

  handleCancel() {
    this.router.navigateByUrl('/notes');
  }

}
