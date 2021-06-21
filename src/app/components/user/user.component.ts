import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  @Input() user: User = null;
  @Input() showLarge = false;
  @Output() showLargeChange = new EventEmitter<boolean>();
  // @Output() userChange = new EventEmitter<User>();
  @Output() userSelected = new EventEmitter<User>();

  constructor() { }

  ngOnInit() { }

  selected() {
    this.userSelected.emit(this.user);
  }

  toggleSize(event) {
    event.stopPropagation();
    this.showLarge = !this.showLarge;
    this.showLargeChange.emit(this.showLarge);
  }

}
