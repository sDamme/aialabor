import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'groupby'
})

export class GroupbyPipe implements PipeTransform {

  transform(collection: Array<object>, property: string): Array<object> {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
      return null;
    }

    // function to get distinct items from the collection
    const distinct = (value, idx, self) => {
      return self.indexOf(value) === idx;
    };

    // getting all categories
    const allCategoriesAsArr = Array.from(new Set(collection.map((item: any) => item[property])));

    /*
     joining them all to a string (because some groups contained several values) and then back to array to get distinct values
     */

    const tmp = allCategoriesAsArr.join(', ').split(', ');


    const getCollection = (x: string) => {
      return {[x]: []};
    };

    // getting distinct categories
    const categories = tmp.filter(distinct);
    const groups = [];

    // pushing movies in categories
    categories.forEach(x => {
      const genres = getCollection(x);
      collection.map(current => {
        if (current[property].includes(x)) {
          genres[x].push(current);
        }
      });
      groups.push(genres);
    });

    // flattening 'groups'
    const out = Object.keys(groups).reduce((r, k) => {
      return Object.assign(r, groups[k]);
    }, {});

    // this will return an array of objects, each object containing a group of objects
    return Object.keys(out).map(key => ({key, value: out[key]}));
  }
}
