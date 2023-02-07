import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class AddNoteHarness extends ComponentHarness {
    static hostSelector = 'rb-add-note';

    note = this.locatorFor('[data-test-id="note-card"]');

    static with(options: BaseHarnessFilters): HarnessPredicate<AddNoteHarness> {
        return new HarnessPredicate(AddNoteHarness, options);
    };

    async getNote(): Promise<TestElement> {
        return await this.note();
    }

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }

    async getElements(selector: string): Promise<TestElement[]> {
        return await this.locatorForAll(`[data-test-id="${selector}"]`)();
    }
}