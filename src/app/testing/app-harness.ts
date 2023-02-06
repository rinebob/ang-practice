import { BaseHarnessFilters, ComponentHarness, HarnessPredicate, TestElement } from '@angular/cdk/testing';

export class AppHarness extends ComponentHarness {
    static hostSelector = 'rb-root';

    static with(options: BaseHarnessFilters): HarnessPredicate<AppHarness> {
        return new HarnessPredicate(AppHarness, options);
    };

    async getElement(selector: string): Promise<TestElement> {
        return await this.locatorFor(`[data-test-id="${selector}"]`)();
    }
}