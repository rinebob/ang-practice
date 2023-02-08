import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader, TestElement } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { NoteCardComponent } from './note-card.component';
import { NoteCardHarness } from './testing/note-card-harness';
import { AppModule } from '../app.module';
import { MOCK_NOTES } from '../testing/mock-data';

fdescribe('NoteCardComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;
  let loader: HarnessLoader;
  let harness: NoteCardHarness;
  let id: TestElement;
  let title: TestElement;
  let content: TestElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, NoopAnimationsModule],
      declarations: [ NoteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCardComponent);
    component = fixture.componentInstance;
    component.note = {...MOCK_NOTES[0]};
    harness = await TestbedHarnessEnvironment.harnessForFixture<NoteCardHarness>(fixture, NoteCardHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    id = await harness.getElement('note-card-id');
    title = await harness.getElement('note-card-title');
    content = await harness.getElement('note-card-content');
    fixture.detectChanges();
  });

  it('should be created and have all elements', () => {
    expect(component).toBeTruthy();
    expect(component.note).toEqual(MOCK_NOTES[0]);
    expect(id).toBeTruthy();
    expect(title).toBeTruthy();
    expect(content).toBeTruthy();
  });

  it('should update note when new note is received', async () => {
    expect(component.note).toEqual(MOCK_NOTES[0]);

    component.note = {...MOCK_NOTES[1]};
    
    expect(component.note).toEqual(MOCK_NOTES[1]);
    expect(await id.text()).toEqual('ID: 40139170-383f-4f63-8fcb-e2011b2c1b03');
    expect(await title.text()).toEqual('Note 1 wow!');
  });

  it('should emit selected note when user clicks on it', async () => {
    spyOn(component, 'handleNoteSelection').and.callThrough();
    spyOn(component.selectedNote, 'emit').and.callThrough();
    const card = await harness.noteCard();

    await card.click();

    expect(component.handleNoteSelection).toHaveBeenCalledWith(MOCK_NOTES[0]);
    expect(component.selectedNote.emit).toHaveBeenCalledWith(MOCK_NOTES[0]);
  });
});
