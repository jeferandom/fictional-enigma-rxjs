import {fromEvent} from 'rxjs';

/**
 * Eventos del Dom
 */

const src1$=fromEvent<MouseEvent>(document,'click')//@note para obtener el nombre del tipo <MouseEvent> se hace mirando en el consol log del evento
const src2$=fromEvent<KeyboardEvent>(document,'keyup')

const observer = {
  next: next=>console.log('next', next)
}


src1$.subscribe(({x,y})=>{
  console.log('event.x', x,y)
});
src2$.subscribe(evento=>{
  console.log('evento', evento.key)
});