import { Routes, RouterModule } from '@angular/router';

import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';

const routes: Routes = [
  { path: '', component: TodayComponent },
  { path: 'tomorrow', component: TomorrowComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);