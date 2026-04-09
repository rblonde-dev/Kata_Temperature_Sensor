import { Component, Signal, input,computed  } from '@angular/core';
import { ISensor } from '../../models/Sensor.model';
import { SensorsService } from '../../services/sensors.service';

@Component({
  selector: 'app-sensor',
  imports: [],
  templateUrl: './sensor.component.html',
  styleUrl: './sensor.component.css',
})
export class SensorComponent {
  sensor = input.required<ISensor>();

  sensorStatus : Signal<String>;

  constructor(private sensorsService: SensorsService) {
    this.sensorStatus = computed(() => this.sensorsService.getStatus(this.sensor().temperature));
  }

}
