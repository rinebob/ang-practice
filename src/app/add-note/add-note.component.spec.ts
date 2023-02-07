import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AddNoteHarness } from './testing/add-note-harness';

import { AppModule } from '../app.module';
import { AddNoteComponent } from './add-note.component';

describe('AddNoteComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;
  let loader: HarnessLoader;
  let harness: AddNoteHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ AddNoteComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNoteComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<AddNoteHarness>(fixture, AddNoteHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should be created and have all elements', async () => {
    const note = await harness.getNote();
    const form = await harness.getElement('note-form');
    const titleInput = await harness.getElement('title-input');
    const textInput = await harness.getElement('note-textarea');
    const createButton = await harness.getElement('create-button');
    const cancelButton = await harness.getElement('cancel-button');
    
    expect(component).toBeTruthy();
    expect(note).toBeTruthy();
    expect(form).toBeTruthy();
    expect(titleInput).toBeTruthy();
    expect(textInput).toBeTruthy();
    expect(createButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();
  });
});
