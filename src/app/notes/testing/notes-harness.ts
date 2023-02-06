import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class NotesHarness extends ComponentHarness {
    static hostSelector = 'rb-action-buttons';

    static with(options: BaseHarnessFilters): HarnessPredicate<NotesHarness> {
        return new HarnessPredicate(NotesHarness, options);
    };

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }
}