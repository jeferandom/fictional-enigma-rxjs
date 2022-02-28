import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('siguiente [next]', value),
  error: error => console.error('error', error),
  complete: () => console.info('Completed [observable]')
};




//const obs$ = Observable.create()

const observable$ = new Observable<string>(subscriber => {
  subscriber.next('Hola');
  subscriber.next('Mundo!');
  //forzar error
  //const a=undefined
  //a.n='x'
  subscriber.complete();
});

observable$.subscribe(observer)

//@note el primer argumento de subscribe solo procesa el next. Es decir que ese argumento se convierte en el subscriptor.
/* observable$.subscribe(
  valor => console.log('next', valor),
  error => console.error('error', error),
  () => console.info('Completed')
) */
//observable$.subscribe(console.log) 
//observable$.subscribe(res=> console.log(res))
