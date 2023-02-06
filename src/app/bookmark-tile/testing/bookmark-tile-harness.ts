import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class BookmarkTileHarness extends ComponentHarness {
    static hostSelector = 'rb-bookmark-tile';

    static with(options: BaseHarnessFilters): HarnessPredicate<BookmarkTileHarness> {
        return new HarnessPredicate(BookmarkTileHarness, options);
    };

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }

    async getElements(selector: string): Promise<TestElement[]> {
        return await this.locatorForAll(`[data-test-id="${selector}"]`)();
    }
}