import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rb-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksComponent {

}
