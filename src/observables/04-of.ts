import {of} from 'rxjs';



//const obs$ = of(1,2,3,4,5,6);
const obs$ = of([1,2],{a:1,b:2},()=>{},true,Promise.resolve(true));
//const obs$ = of<number>(1,2,3,4,5,6,'string'); //@note mal tipado

//console.log('inicio obs$')//@note demostrar que este observable es sincrono
obs$.subscribe(
  next =>console.log('next', next),
  null,
  ()=>console.log('terminamos secuencia')
  )
//console.log('fin obs$')//@note demostrar que este observable es sincrono
