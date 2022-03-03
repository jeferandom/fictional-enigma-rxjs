import {range} from 'rxjs';
import {map} from 'rxjs/operators'

range(1,8).pipe(
  map(val=>{
    return val 
  }),
  map(val=>{
    return val *2
  })
)
.subscribe(console.log)


