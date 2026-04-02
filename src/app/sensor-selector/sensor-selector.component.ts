import { Component, Signal } from '@angular/core';
import { SensorComponent } from '../sensor/sensor.component';
import { SensorsService } from '../sensors.service';
import { ISensor } from '../Sensor.model';

@Component({
  selector: 'app-sensor-selector',
  imports: [SensorComponent],
  templateUrl: './sensor-selector.component.html',
  styleUrl: './sensor-selector.component.css',
})
export class SensorSelectorComponent {

  sensors! : Signal<ISensor[]>;
  constructor(private sensorsService: SensorsService)
  {

  }

  ngOnInit(){
    this.sensors = this.sensorsService.getSensors();
  }

}
