import { Observable, Observer, Subject } from "rxjs";

const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(
    () => subs.next(Math.random()), 1000
  );

  return () => {
    //@note *AAA para detener esto a traves de un subject es necesario desubscribir la instancia de subject
    clearInterval(intervalID)
    console.log('Intervalo Destruido')
  }

});

/** 
 * 1- Casteo múltiple - Distribuye la misma informacion a todos los subscriptores
 * 2- Es un Obsevable al que te puedes subscribir 
 * 3- Tambien es un observador que se puede subscribir a un Observable
 * 4- subscribe, Next, error y complete
 * @type {*} 
 * */
const subject$ = new Subject();
const subjectSubscription = intervalo$.subscribe(subject$);

/* const subs1 = intervalo$.subscribe(rnd=>console.log('subs1',rnd))
const subs2 = intervalo$.subscribe(rnd=>console.log('subs2',rnd)) */
const observer: Observer<any> = {
  next: value => {
    console.log('observer next', value)
    console.log('---')

  },
  error: error => console.warn('error'),
  complete: () => console.info('observer Completed')
};
const cbNext1 = (rnd: any) => {
  console.log('subscribe 1', rnd)
}

const cbNext2 = (rnd: any) => {
  console.log('subscribe 2', rnd)
  console.log('---')
}

const subA = subject$.subscribe(observer)
const subB = subject$.subscribe(observer)

//@note Prueba A interrumpir valor emitido
/*  setInterval(() => {
  subject$.next(10);
}, 3500) */

//@note Prueba B cesar de emitir tras intrrumpir
/* setTimeout(() => {
  subject$.next(10);
  subject$.complete();
}, 3500) */

//@note Prueba C cesar de emitir tras intrrumpir y limpiar intervalo
setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  //@note *AAA desubscripcion y complete por medio de subject 
  subjectSubscription.unsubscribe()
}, 3500)

