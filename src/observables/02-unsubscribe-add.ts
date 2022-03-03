import { Observable, Observer } from "rxjs";
const Subscribe = subscriber => {
  //Crear un contador, 1.2.3.4.5....
  let count = 0

  const interval = setInterval(() => {
    count += 1
    subscriber.next(count);
    console.log('interval executed')
    console.log('-')
  }, 1000)

  setTimeout(() => {
    subscriber.complete()
  }, 2500)

  return () => {
    //@note Destruir Observable, hacer lo necesario para que el Observable se resetee
    clearInterval(interval)
    console.log('Intervalo Destruido')
  }
}
const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('error'),
  complete: () => console.info('Completed')
};

const intervalo$ = new Observable<number>(Subscribe);

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
     .add(subs3);
     
setTimeout(() => {
  subs1.unsubscribe();/* 
  subs2.unsubscribe()
  subs3.unsubscribe() */

  console.log('unsubscribe timeout')
}, 6000)