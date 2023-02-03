<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { AppHarness } from './testing/app-harness';

describe('AppComponent', () => {
  let loader: HarnessLoader;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let harness: AppHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
=======
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
>>>>>>> 1a7b65d (Initial commit)
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
<<<<<<< HEAD

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<AppHarness>(fixture, AppHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title, subtitle and three sections`, async () => {
    const topSection = await harness.getElement('top-section');
    const contentSection = await harness.getElement('content-section');
    const bottomSection = await harness.getElement('bottom-section');
    
    expect(component.title).toEqual('11:11');
    expect(component.subtitle).toEqual('2 February 2023');
    expect(topSection).toBeTruthy();
    expect(contentSection).toBeTruthy();
    expect(bottomSection).toBeTruthy();
  });

=======
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ang-practice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ang-practice');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ang-practice app is running!');
  });
>>>>>>> 1a7b65d (Initial commit)
});
