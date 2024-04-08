import { Routes } from '@angular/router';
import {RegistrationComponent} from "./registration/registration.component";
import {AplicationsListComponent} from "./aplications-list/aplications-list.component";
import {MainComponent} from "./main/main.component";

export const routes: Routes = [
  {
   path:'',
   component: MainComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'aplications-list',
    component:AplicationsListComponent
  },
  {
   path: 'registration/aplications-list',
   component: AplicationsListComponent
  },

];
