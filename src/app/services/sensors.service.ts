import { Injectable, signal } from '@angular/core';
import { ISensor } from '../models/Sensor.model';
import { httpResource, HttpResourceRef } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class SensorsService {

  private sensorsResource : HttpResourceRef<ISensor[]> = httpResource(() => '/api/sensors', 
  {
    defaultValue : []
  });

  LowTemperature = signal<number>(22);

  highTemperature = signal<number>(35);

  constructor()
  {
  }

  getSensors(){
    return  this.sensorsResource.value ;
  }

  getStatus( temperature : number)
  {
    if(temperature < this.LowTemperature())
    {
      return "COLD";
    }
    else if(temperature < this.highTemperature())
    {
      return "WARM";
    }
    else
    {
      return "HOT";
    }
  }

  setLowTemperature( low : number)
  {
    this.LowTemperature.set(low);
  }

  setHighTemperature( high : number)
  {
    this.highTemperature.set(high);
  }


}
