import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class NotesHarness extends ComponentHarness {
    static hostSelector = 'rb-action-buttons';

    notes = this.locatorForAll('[data-test-id="note-card"]')

    static with(options: BaseHarnessFilters): HarnessPredicate<NotesHarness> {
        return new HarnessPredicate(NotesHarness, options);
    };

    async getNotes(): Promise<TestElement[]> {
        return await this.notes();
    }

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }

    async getElements(selector: string): Promise<TestElement[]> {
        return await this.locatorForAll(`[data-test-id="${selector}"]`)();
    }
}