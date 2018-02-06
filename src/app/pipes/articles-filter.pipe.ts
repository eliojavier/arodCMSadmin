import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articlesFilter'
})
export class ArticlesFilterPipe implements PipeTransform {

  transform(data: any, term: any): any {
    if (term === undefined || term === '') {
      return data;
    }

    return data.filter(function (item) {
      return (item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.body.toLowerCase().includes(term.toLowerCase()));
    });
  }

}
