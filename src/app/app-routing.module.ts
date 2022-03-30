import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';

const routes: Routes = [

  // define the path that corresponds with the component that should be rendered
  {path: '', component:MainComponent, pathMatch: "full"}, // upon initializing the app, it loads the main component
  {path: 'main', component: MainComponent},

  // {path: 'register', component: RegisterComponent},
  // {path: 'all', component: AllComponent},
  // {path: 'find', component: FindComponent},
  // {path: 'remove', component: RemoveComponent},

  {path: '**', component: MainComponent} // a WildCard Route is used to handle unknown paths (ALWAYS goes last)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }