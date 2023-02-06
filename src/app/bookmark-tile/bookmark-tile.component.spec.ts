import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { BookmarkTileHarness } from './testing/bookmark-tile-harness';

import { BookmarkTileComponent } from './bookmark-tile.component';

describe('BookmarkTileComponent', () => {
  let component: BookmarkTileComponent;
  let fixture: ComponentFixture<BookmarkTileComponent>;
  let loader: HarnessLoader;
  let harness: BookmarkTileHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkTileComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<BookmarkTileHarness>(fixture, BookmarkTileHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    
    fixture.detectChanges();
  });

  it('should be create and have image and text', async () => {
    const image = await harness.getElement('bookmark-tile-image');
    const text = await harness.getElement('bookmark-tile-text');
    
    expect(component).toBeTruthy();
    expect(image).toBeTruthy();
    expect(text).toBeTruthy();

  });
});
