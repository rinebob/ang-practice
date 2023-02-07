import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../common/interfaces';
import { MOCK_NOTES } from '../testing/mock-data';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesBS = new BehaviorSubject<Note[]>([]);

  constructor() {
    this.setNotes([...MOCK_NOTES]);
   }

  setNotes(notes: Note[]) {
    console.log('nS sN notes: ', [...notes])
    this.notesBS.next([...notes]);
  }

  getNotes(): Note[] {
    return this.notesBS.value;
  }

  getNote(id: string): Note | undefined {
    const note = this.notesBS.value.find(note => note.id === id)
    console.log('n gN id/note: ', id, note);
    return this.notesBS.value.find(note => note.id === id);
  }

  createNote(note: Note): Note {
    const newNote = new Note(note.title, note.content);
    this.notesBS.next([...this.notesBS.value, newNote]);

    return newNote;
  }

  updateNote(id: string, updatedNote: Partial<Note>): Note {
    let note = this.getNote(id)!;
    const otherNotes = this.notesBS.value.filter(n => n.id !== note?.id)
    note = {...note, ...updatedNote};
    this.notesBS.next({...otherNotes, ...note});
    return note
  }

  deleteNote(id: string): string {
    const noteIndex = this.notesBS.value.findIndex(note => note.id === id);
    console.log('nS dN id/index: ', id, noteIndex);
    if (noteIndex !== -1) {
      const deletedNotes = this.notesBS.value.splice(noteIndex, 1);
      console.log('nS dN deleted notes: ', deletedNotes);
      console.log('nS dN remaining notes: ', this.notesBS.value);
      
      console.log('nS dN final notesBS: ', this.notesBS.value);

      return `Deleted note with id: ${id}`;

    } else {
      return `Delete failed - note not found with id: ${id}`;
    }
  }
}
