import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rb-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {

}
