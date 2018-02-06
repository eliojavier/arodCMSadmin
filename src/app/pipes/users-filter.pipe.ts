import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(data: any, term: any): any {
    if (term === undefined || term === '') {
      return data;
    }

    return data.filter(function (item) {
      return (item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.email.toLowerCase().includes(term.toLowerCase()));
    });
  }

}
