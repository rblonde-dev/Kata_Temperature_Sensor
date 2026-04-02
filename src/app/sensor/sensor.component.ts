import { Component, signal, input  } from '@angular/core';
import { ISensor } from '../Sensor.model';

@Component({
  selector: 'app-sensor',
  imports: [],
  templateUrl: './sensor.component.html',
  styleUrl: './sensor.component.css',
})
export class SensorComponent {
  sensor = input.required<ISensor>();

  constructor() {

  }

  getStatus()
  {
    if(this.sensor().temperature < 22)
    {
      return "COLD"
    }
    else if(this.sensor().temperature < 35)
    {
      return "WARM"
    }
    else{
      return "HOT"
    }
  }
}
