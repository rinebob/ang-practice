import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';
import { BookmarkTileHarness } from 'src/app/bookmark-tile/testing/bookmark-tile-harness';

export class BookmarksHarness extends ComponentHarness {
    static hostSelector = 'rb-action-buttons';

    bookmarkTiles = this.locatorForAll('rb-bookmark-tile');

    static with(options: BaseHarnessFilters): HarnessPredicate<BookmarksHarness> {
        return new HarnessPredicate(BookmarksHarness, options);
    };

    async getBookmarkTiles(): Promise<TestElement[]> {
        return await this.bookmarkTiles();
    }

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }

    async getElements(selector: string): Promise<TestElement[]> {
        return await this.locatorForAll(`[data-test-id="${selector}"]`)();
    }
}