import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class AddNoteHarness extends ComponentHarness {
    static hostSelector = 'rb-add-note';

    note = this.locatorFor('[data-test-id="note-card"]');
    form = this.locatorFor('[data-test-id="note-form"]');
    title = this.locatorFor(`[data-test-id="title-input"]`);
    content = this.locatorFor(`[data-test-id="content-textarea"]`);
    createButton = this.locatorFor('[data-test-id="create-button"]');
    cancelButton = this.locatorFor('[data-test-id="cancel-button"]');

    static with(options: BaseHarnessFilters): HarnessPredicate<AddNoteHarness> {
        return new HarnessPredicate(AddNoteHarness, options);
    };

    async getNote(): Promise<TestElement> {
        return await this.note();
    }

    async getForm(): Promise<TestElement> {
        return await this.form();
    }

    async getTitle(): Promise<TestElement> {
        return await this.title();
    }

    async getContent(): Promise<TestElement> {
        return await this.content();
    }

    async getCreateButton(): Promise<TestElement> {
        return await this.createButton();
    }

    async getCancelButton(): Promise<TestElement> {
        return await this.cancelButton();
    }
}