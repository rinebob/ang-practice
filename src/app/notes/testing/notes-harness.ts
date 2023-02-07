import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';
import { NoteCardHarness } from 'src/app/note-card/testing/note-card-harness';

export class NotesHarness extends ComponentHarness {
    static hostSelector = 'rb-notes';

    noteCards = this.locatorForAll(NoteCardHarness);

    static with(options: BaseHarnessFilters): HarnessPredicate<NotesHarness> {
        return new HarnessPredicate(NotesHarness, options);
    };

    async getNoteCards(): Promise<NoteCardHarness[]> {
        return await this.noteCards();
    }

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }

    async getElements(selector: string): Promise<TestElement[]> {
        return await this.locatorForAll(`[data-test-id="${selector}"]`)();
    }
}