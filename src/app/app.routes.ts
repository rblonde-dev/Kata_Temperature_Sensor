import { Routes } from '@angular/router';
import { SensorSelectorComponent } from './sensor-selector/sensor-selector.component';

export const routes: Routes = [
    {path: '', redirectTo: '/sensors', pathMatch: 'full'},
    {path: 'sensors', component: SensorSelectorComponent}
];
