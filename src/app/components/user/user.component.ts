import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  @Input() user: User = null;
  @Input() showLarge = false;
  // @Output() userChange = new EventEmitter<User>();
  @Output() userSelected = new EventEmitter<User>();

  constructor() { }

  ngOnInit() { }

  selected() {
    this.userSelected.emit(this.user);
  }

}
