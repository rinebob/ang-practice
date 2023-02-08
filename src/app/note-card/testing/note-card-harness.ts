import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class NoteCardHarness extends ComponentHarness {
    static hostSelector = 'rb-note-card';

    noteCard = this.locatorFor('[data-test-id="note-card"]');

    static with(options: BaseHarnessFilters): HarnessPredicate<NoteCardHarness> {
        return new HarnessPredicate(NoteCardHarness, options);
    };

    async getNoteCard(): Promise<TestElement> {
        return await this.noteCard();
    }

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }

    async getElements(selector: string): Promise<TestElement[]> {
        return await this.locatorForAll(`[data-test-id="${selector}"]`)();
    }

    async click(id: string) {
        const element = await this.getElement(id);
        return await element.click();
    }
}