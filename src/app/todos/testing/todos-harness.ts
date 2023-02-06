import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class TodosHarness extends ComponentHarness {
    static hostSelector = 'rb-action-buttons';

    todos = this.locatorForAll('[data-test-id="todo-card"]')

    static with(options: BaseHarnessFilters): HarnessPredicate<TodosHarness> {
        return new HarnessPredicate(TodosHarness, options);
    };

    async getTodos(): Promise<TestElement[]> {
        return await this.todos();
    }

    

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }
}