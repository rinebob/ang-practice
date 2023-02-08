import { TestBed } from '@angular/core/testing';

import { Note } from '../common/interfaces';
import { NoteService } from './note.service';
import { MOCK_NOTES } from '../testing/mock-data';

describe('NoteService', () => {
  let service: NoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteService);
    service.setNotes([...MOCK_NOTES]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all notes', () => {
    const notes = service.getNotes();
    expect(notes).toEqual(MOCK_NOTES);
  });

  it('should get one note', () => {
    const note = service.getNote('40139170-383f-4f63-8fcb-e2011b2c1b03');
    
    expect(note).toEqual(MOCK_NOTES[0]);
  });

  it('should create a note', () => {
    const newNote: Note = service.createNote({title: 'test new note', content: 'this is a test of create note method'});
  
    expect(newNote.title).toEqual('test new note');
    expect(newNote.content).toEqual('this is a test of create note method');
  });

  it('should update a note', () => {
    const updatedNote = {...MOCK_NOTES[0], title: 'Updated note 1 wow its updated!'};
        
    expect(updatedNote).toEqual({
      id: '40139170-383f-4f63-8fcb-e2011b2c1b03',
      title: 'Updated note 1 wow its updated!',
      content: 'hey this is note 1 that\'s cool!',
    });
    
  });

  it('should delete a note if id exists', () => {
    const id = '40139170-383f-4f63-8fcb-e2011b2c1b03';
    const outcome = service.deleteNote(id);
    
    const mockNotesAfterDelete = MOCK_NOTES.filter(note => note.id !== id);
  
    expect(outcome).toEqual(`Deleted note with id: ${id}`);
    expect(service.getNotes()).toEqual([...mockNotesAfterDelete]);
  });

  it('delete should return an error message if no id exists', () => {
    const initialNotes = [...service.getNotes()];
    const id = 'this note doesnt exist';
    const outcome = service.deleteNote(id);
  
    expect(outcome).toEqual(`Delete failed - note not found with id: ${id}`);
    expect(service.getNotes()).toEqual([...initialNotes]);
  });
});
