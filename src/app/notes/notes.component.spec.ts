import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { NotesHarness } from './testing/notes-harness';

import { NOTE_INITIALIZER } from '../common/constants';
import { NotesComponent } from './notes.component';
import { NoteService } from '../services/note.service';
import { MOCK_NOTES } from '../testing/mock-data';
import { AppModule } from '../app.module';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let loader: HarnessLoader;
  let harness: NotesHarness;
  let fakeNotesService: Partial<NoteService>;

  beforeEach(async () => {
    fakeNotesService = jasmine.createSpyObj<NoteService>('NoteService', {
      getNotes: [...MOCK_NOTES]
    });

    await TestBed.configureTestingModule({
      imports: [AppModule, NoopAnimationsModule],
      declarations: [ NotesComponent ],
      providers: [
        {provide: NoteService, useValue: fakeNotesService},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<NotesHarness>(fixture, NotesHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should be created and have all UI elements', async () => {
    const notes = await harness.getNoteCards();
    const addButton = await harness.getElement('add-button');
    
    expect(component).toBeTruthy();
    expect(addButton).toBeTruthy();
    expect(notes.length).toBe(4);
    expect(fakeNotesService.getNotes).toHaveBeenCalled();
  });

  it('should get all notes when instantiated', async () => {
    const notes = await harness.getNoteCards();
    
    expect(fakeNotesService.getNotes).toHaveBeenCalled();
    expect(notes.length).toBe(4);
  });

  it('should handle user note selection', () => {
    expect(component.selectedNoteBS.value).toEqual(NOTE_INITIALIZER);

    const note = MOCK_NOTES[0];
    
    component.handleSelectedNote(note);
    
    expect(component.selectedNoteBS.value).toEqual(note);
  });
});
