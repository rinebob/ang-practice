import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { NotesHarness } from './testing/notes-harness';

import { NotesComponent } from './notes.component';

fdescribe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let loader: HarnessLoader;
  let harness: NotesHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<NotesHarness>(fixture, NotesHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
