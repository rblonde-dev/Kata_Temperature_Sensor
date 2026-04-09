import { Component, ResourceStatus, Signal } from '@angular/core';
import { SensorComponent } from '../sensor/sensor.component';
import { SensorsService } from '../../services/sensors.service';
import { ISensor } from '../../models/Sensor.model';

@Component({
  selector: 'app-sensor-selector',
  imports: [SensorComponent],
  templateUrl: './sensor-selector.component.html',
  styleUrl: './sensor-selector.component.css',
})
export class SensorSelectorComponent {

  sensors!: Signal<ISensor[]>;
  highTemperature : Signal<number>;
  lowTemperature : Signal<number>;

  constructor(private sensorsService: SensorsService)
  {
    this.highTemperature = this.sensorsService.highTemperature;
    this.lowTemperature = this.sensorsService.LowTemperature;
  }

  ngOnInit(){
    this.sensors = this.sensorsService.getSensors();
    
  }

  UpdateHighTemperature(value :number)
  {
    this.sensorsService.setHighTemperature( Math.max(value,this.lowTemperature()));
  }

  UpdateLowTemperature(value :number)
  {
    this.sensorsService.setLowTemperature(Math.min(value,this.highTemperature()));
  }

}
