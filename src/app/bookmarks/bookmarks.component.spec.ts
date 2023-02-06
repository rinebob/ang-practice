import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { BookmarksHarness } from './testing/bookmarks-harness';

import { BookmarksComponent } from './bookmarks.component';

fdescribe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>;
  let loader: HarnessLoader;
  let harness: BookmarksHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<BookmarksHarness>(fixture, BookmarksHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
