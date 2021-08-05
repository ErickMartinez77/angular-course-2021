import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';

  constructor() {
    const testMap = [1, 2, 3, 4, 5].map(item => item * 2);
    console.log(testMap);

    const testForEach = [1, 2, 3, 4, 5, 6].forEach(item => item);
    console.log(testForEach);

    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 1);
    console.log(testFind);

    const testFilter = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
    console.log(testFilter);

    const testFindIndex = [90, 2, 300, 4, 5, 6].findIndex(item => item === 90);
    console.log(testFindIndex);

    const testIndexOf = [90, 2, 300, 4, 5, 6].indexOf(300);
    console.log(testIndexOf);

    const testIndexOf2 = 'ricardo'.indexOf('o');
    console.log(testIndexOf2);

    const testJoin = [1, 2, 3, 4, 5, 6].join(',');
    console.log(testJoin);

    const testSplit = '1,2,3,4,5,6'.split(',');
    console.log(testSplit);

    const testSpliceA = [10, 20, 30, 40, 50, 60];
    const testSpliceB = [1, 2, 3, 4, 5, 6].splice(1, 2);
    testSpliceA.splice(0, 1);

    console.log(testSpliceB, testSpliceA);

    const testReduce = [1, 2, 3, 4, 5, 6].reduce(
      (acc, value) => acc + value,
      100
    );
    console.log(testReduce);

    const testEntries = { value: 'ricardo', key: 'RPC' };
    console.log(Object.entries(testEntries));
    console.log(Object.keys(testEntries));
    console.log(Object.values(testEntries));

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1]; //... -> spread operator
    console.log(array2);

    //desestructuracion
    const per3 = { name: 'a', age: 12, phone: 123, extra: 123, response: 200 };
    const { name } = per3;
    console.log('name: ',name)
  }
}
