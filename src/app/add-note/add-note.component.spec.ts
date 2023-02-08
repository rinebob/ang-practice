import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AddNoteHarness } from './testing/add-note-harness';

import { NoteService } from '../services/note.service';
import { AppModule } from '../app.module';
import { AddNoteComponent } from './add-note.component';

fdescribe('AddNoteComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;
  let harness: AddNoteHarness;
  let fakeNotesService: Partial<NoteService>;

  beforeEach(async () => {
    fakeNotesService = jasmine.createSpyObj<NoteService>('NoteService', [
      'createNote'
    ]);

    await TestBed.configureTestingModule({
      declarations: [ AddNoteComponent ],
      imports: [AppModule],
      providers: [
        {provide: NoteService, useValue: fakeNotesService},
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoteComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<AddNoteHarness>(fixture, AddNoteHarness);
    fixture.detectChanges();
  });

  it('should be created and have all elements', async () => {
    const note = await harness.getNote();
    const form = await harness.getForm();
    const titleInput = await harness.getTitle();
    const textInput = await harness.getContent();
    const createButton = await harness.getCreateButton();
    const cancelButton = await harness.getCancelButton();
    
    expect(component).toBeTruthy();
    expect(note).toBeTruthy();
    expect(form).toBeTruthy();
    expect(titleInput).toBeTruthy();
    expect(textInput).toBeTruthy();
    expect(createButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();
  });

  it('create button should be disabled when form instantiated', async () => {
    const createButton = await harness.getCreateButton();
    
    expect(await createButton.hasClass('disabled')).toBe(true);
  });

  it('form should be invalid and have required errors', async () => {
    const form = component.noteForm;
    const titleControl = form.get('titleControl');
    const contentControl = form.get('contentControl');

    expect(form.status).toEqual('INVALID');
    expect(titleControl?.status).toBe('INVALID');
    expect(titleControl?.errors?.['required']).toBe(true);
    expect(contentControl?.status).toBe('INVALID');
    expect(contentControl?.errors?.['required']).toBe(true);
  });

  it('entering title removes title control errors', async () => {
    const form = component.noteForm;
    const titleControl = form.get('titleControl');
    
    expect(titleControl?.value).toEqual('');
    
    titleControl?.setValue('New title');
    
    expect(titleControl?.value).toEqual('New title');
    expect(titleControl?.status).toBe('VALID');
    expect(titleControl?.errors).toBe(null);
    expect(form.status).toBe('INVALID');
  });

  it('entering content removes content control errors', async () => {
    const form = component.noteForm;
    const contentControl = form.get('contentControl');
    
    expect(contentControl?.value).toEqual('');
    
    contentControl?.setValue('New content');
    
    expect(contentControl?.value).toEqual('New content');
    expect(contentControl?.status).toBe('VALID');
    expect(contentControl?.errors).toBe(null);
    expect(form.status).toBe('INVALID');
  });

  it('entering all data makes form valid', async () => {
    const form = component.noteForm;
    const titleControl = form.get('titleControl');
    const contentControl = form.get('contentControl');
    
    expect(titleControl?.value).toEqual('');
    expect(contentControl?.value).toEqual('');
    
    titleControl?.setValue('Different title');
    contentControl?.setValue('Different content');

    expect(titleControl?.value).toEqual('Different title');
    expect(contentControl?.value).toEqual('Different content');
    expect(titleControl?.status).toBe('VALID');
    expect(titleControl?.errors).toBe(null);
    expect(contentControl?.status).toBe('VALID');
    expect(contentControl?.errors).toBe(null);
    expect(form.status).toBe('VALID');
    expect(form.errors).toBe(null);
    
  });

  it('submit button works when form is valid', async () => {
    spyOn(component, 'handleFormSubmit').and.callThrough();
    const form = component.noteForm;
    const titleElement = await harness.getTitle();
    const contentElement = await harness.getContent();
    const createButton = await harness.createButton();
   
    titleElement.setInputValue('Different title');
    titleElement.dispatchEvent('input');
    contentElement.setInputValue('Different content');
    contentElement.dispatchEvent('input');
    fixture.detectChanges();
   
    const note = {
      title: form.get('titleControl')?.value,
      content: form.get('contentControl')?.value,
    };

    await createButton.click();

    expect(component.handleFormSubmit).toHaveBeenCalled()
    expect(fakeNotesService.createNote).toHaveBeenCalledWith(note)
  });

  it('cancel button navigates back to Notes component', async () => {
    spyOn(component.router, 'navigateByUrl').and.callThrough();
    const cancelButton = await harness.cancelButton();

    await cancelButton.click();

    expect(component.router.navigateByUrl).toHaveBeenCalledWith('/notes');
  });
});
