import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { BookmarksHarness } from './testing/bookmarks-harness';

import { AppModule } from '../app.module';
import { BookmarksComponent } from './bookmarks.component';

describe('BookmarksComponent', () => {
  let component: BookmarksComponent;
  let fixture: ComponentFixture<BookmarksComponent>;
  let loader: HarnessLoader;
  let harness: BookmarksHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [ BookmarksComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<BookmarksHarness>(fixture, BookmarksHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should be created and have bookmarks', async () => {
    const bookmarks = await harness.getBookmarkTiles();
    
    expect(component).toBeTruthy();
    expect(bookmarks.length).toBe(39);
  });
});
