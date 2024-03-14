import { Injectable } from '@angular/core';
import { Observable, Subject, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  $valuesSubject = new Subject<any>;

  constructor() {

    setTimeout( ()=>  {
    this.$valuesSubject.next(1);

    }, 1000)
   }
  

  

  // myObservable = of(1,2,3,4,5);
  

  

}
