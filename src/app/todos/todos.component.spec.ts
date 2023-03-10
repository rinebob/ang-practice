import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { TodosHarness } from './testing/todos-harness';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let loader: HarnessLoader;
  let harness: TodosHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    harness = await TestbedHarnessEnvironment.harnessForFixture<TodosHarness>(fixture, TodosHarness);
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should be created and have todos', async () => {
    const todos = await harness.getTodos();
    
    expect(component).toBeTruthy();
    expect(todos.length).toBe(2);
  });
});
