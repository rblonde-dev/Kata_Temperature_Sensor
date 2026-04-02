import { Injectable, Signal, computed, signal } from '@angular/core';
import { ISensor } from './Sensor.model';
import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  private apiUrl = "http://localhost:5248/api/sensors";
  /*private testsensors : Signal<ISensor[]>;
  private sensorArray : ISensor[] =
  [
    {"id": 0, "temperature" : -5},
    {"id": 1, "temperature" : -5}
  ]*/
  constructor(private http: HttpClient)
  {
    //this.testsensors = signal(this.sensorArray)
  }
  getSensors(){
    return toSignal( this.http.get<ISensor[]>(this.apiUrl).pipe( 
      catchError(() => of([]))),
    {initialValue : []});
  }
}
