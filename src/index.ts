import { Observable } from "rxjs";


//const obs$ = Observable.create()

const observable$ = new Observable<string>(subscriber => {
  subscriber.next('Hola');
  subscriber.next('Mundo!');

  subscriber.complete();
});

observable$.subscribe(console.log) //observable$.subscribe(res=> console.log(res))

