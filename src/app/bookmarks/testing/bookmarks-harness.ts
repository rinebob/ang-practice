import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class BookmarksHarness extends ComponentHarness {
    static hostSelector = 'rb-action-buttons';

    static with(options: BaseHarnessFilters): HarnessPredicate<BookmarksHarness> {
        return new HarnessPredicate(BookmarksHarness, options);
    };

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }
}