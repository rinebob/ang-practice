import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class ActionButtonsHarness extends ComponentHarness {
    static hostSelector = 'rb-action-buttons';

    static with(options: BaseHarnessFilters): HarnessPredicate<ActionButtonsHarness> {
        return new HarnessPredicate(ActionButtonsHarness, options);
    };

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }

    
}