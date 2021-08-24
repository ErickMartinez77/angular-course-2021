import { Component, ElementRef, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';
  sw = true;

  color:string;

  people = [{name:'juan', lastName:'perez'},{name:'erick', lastName:'martinez'},{name:'cristian', lastName:'paz'}];

  video = 1;
  tiktok = of([1,2,3,4,5]);
  tiktok2 = new BehaviorSubject(this.video);  
  personASub: Subscription;

  @ViewChild('myDiv2') myDiv2: ElementRef;
  @ViewChild('myDiv3') myDiv3: ElementRef;
  @ViewChild('myCompErick') myCompErick: ElementRef;
  
  @ViewChild('tareaDiv') tareaDiv: ElementRef;

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

    const testEntries = { value: 'erick', key: 'RPC' };
    console.log(Object.entries(testEntries));
    console.log(Object.keys(testEntries));
    console.log(Object.values(testEntries)); //con values se puede convertir de json a array

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1]; //... -> spread operator
    console.log(array2);

    //desestructuracion
    const per3 = { name: 'a', age: 12, phone: 123, extra: 123, response: 200 };
    const { name } = per3;
    console.log('name: ', name);

    //EJERCICIO 1
    //{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los numeros pares
    const e1 = { 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a' };
    const b = Object.keys(e1)
      .map(n => parseInt(n))
      .reduce((acc, val) => {
        if (val % 2 === 0) {
          acc = acc + val;
        }
        return acc;
      }, 0); //inicializamos el acumulador en 0
    console.log(b);

    //EJERCICIO 2
    //[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena
    const e2 = [1, 2, 3, 4, 5, 6].filter(s => s % 2 !== 0).join('-');
    console.log(e2);




      //------------------OBSERVER OF----------------
      //PERSONA A
    this.tiktok.pipe(
      map(s=>s.join('-'))
    ).subscribe(v=> {
      console.log('PERSONA A VIDEO: ', v)
    });

    //PERSONA B
    this.tiktok.pipe(
      filter((v:any) => v[0] %2===1)
    ).subscribe(v=> {
      console.log('PERSONA B VIDEO: ', v)
    });

    //PERSONA C
    this.tiktok.subscribe(v=> {
      console.log('PERSONA C VIDEO: ', v)
    });


      //PERSONA D
    this.personASub= this.tiktok2.pipe(
      filter(s=> s%2 === 0)
    ).subscribe(v=> {
      console.log('PERSONA A VIDEO: ', v)
    });

    //PERSONA E
    this.tiktok2.pipe(
    ).subscribe(v=> {
      console.log('PERSONA B VIDEO: ', v)
    });

    //PERSONA F
    this.tiktok2.subscribe(v=> {
      console.log('PERSONA C VIDEO: ', v)
    });



  }

  onAddVideo(){
    this.video ++;
    this.tiktok2.next(this.video);
  }

  personAUnsubscribe(){
    this.personASub.unsubscribe();
  }



  printDataErickComp(event: any) {
    console.log('ERICK COMP', event);
  }

  printData(event) {
    console.log('CHILD COMP SENT DATA: ', event);
  }


  test(event){
    console.log(event);
  }


  onShowLocalVars(){
    console.log(this.myDiv2, this.myDiv3, this.myCompErick);

    this.myCompErick.onClickTest();

    this.myDiv3.nativeElement.value = 'ricardo'

    
  }

  //TAREA cambiar de color el borde de un div 17/08/2021
  tareaDivColor(){
    this.tareaDiv.nativeElement.style.border = "5px yellow solid";
    //this.tareaDiv.nativeElement.style.className = "est2";
  }





  //-----------------------SEGUNDO TERMINO
  //las funciones puras reciben unos valores y ya se sabe la respuesta
  pure(a:number, b:number){
    return a + b;
  }

  //las funciones impuras, le enviamos valores pero no se sabe el resultado todavia
  inpure(a:number, b:number){
    const aux = Math.random();
    return a + b + aux;
  }
}
