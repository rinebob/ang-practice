import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class TodosHarness extends ComponentHarness {
    static hostSelector = 'rb-action-buttons';

    static with(options: BaseHarnessFilters): HarnessPredicate<TodosHarness> {
        return new HarnessPredicate(TodosHarness, options);
    };

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }
}