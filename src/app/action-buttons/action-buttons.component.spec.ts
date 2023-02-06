import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ActionButtonsHarness } from './testing/action-buttons-harness';


import { ActionButtonsComponent } from './action-buttons.component';

fdescribe('ActionButtonsComponent', () => {
  let component: ActionButtonsComponent;
  let fixture: ComponentFixture<ActionButtonsComponent>;
  let loader: HarnessLoader;
  let harness: ActionButtonsHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionButtonsComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<ActionButtonsHarness>(fixture, ActionButtonsHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
