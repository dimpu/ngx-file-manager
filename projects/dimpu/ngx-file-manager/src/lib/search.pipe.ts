

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class SearchPipe implements PipeTransform {

   /**
   * @param items object from array
   * @param term term's search
   */
  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   *
   */
  static filter(items: Array<{ [key: string]: any }>, term: string): Array<{ [key: string]: any }> {

    const toCompare = term.toLowerCase();

    return items.filter(function (item: any) {
      for (const property in item) {
        if (item[property] === null || item[property] === undefined) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    });
  }

  transform(items: any, term: string): any {
    if (!term || !items) {
      return items;
    }

    return SearchPipe.filter(items, term);
  }



}
