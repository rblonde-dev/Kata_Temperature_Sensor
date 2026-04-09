import { Routes } from '@angular/router';
import { SensorSelectorComponent } from './components/sensor-selector/sensor-selector.component';

export const routes: Routes = [
    {path: '', redirectTo: '/sensors', pathMatch: 'full'},
    {path: 'sensors', component: SensorSelectorComponent}
];
