import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../models/user';

@Pipe({
  name: 'filterUsers',
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: User[], filterText: string): User[] {
    // Guards
    if (!users || users.length === 0) {
      return [];
    }
    if (!filterText) {
      return users;
    }

    const lowerCaseFilterText = filterText.toLowerCase();
    return users.filter(user => {
      return user.name.toLowerCase().indexOf(lowerCaseFilterText) > -1 ||
        user.username.toLowerCase().indexOf(lowerCaseFilterText) > -1 ||
        user.email.toLowerCase().indexOf(lowerCaseFilterText) > -1 ||
        user.phone.toLowerCase().indexOf(lowerCaseFilterText) > -1 ||
        user.website.toLowerCase().indexOf(lowerCaseFilterText) > -1 ||
        (user.company ? user.company.name.toLowerCase().indexOf(lowerCaseFilterText) > -1 : false);
    });
  }

}
