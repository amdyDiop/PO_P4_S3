import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion.component';
import {AccordComponent} from './accord/accord.component';
import {ListAccordComponent} from './accord/list-accord/list-accord.component';
// import {AddAccordComponent} from './accord/add-accord/add-accord.component';
import {EditAccordComponent} from './accord/edit-accord/edit-accord.component';
import {AddAccordComponent} from "./accord/add-accord/add-accord.component";

const routes: Routes = [
  {
    path: 'connexion',
    component: ConnexionComponent,
  },
  {
    path: 'list-accord',
    component: ListAccordComponent,
  },
  {
    path: 'add-accord',
    component: AddAccordComponent,
  },
  {
    path: 'edit-accord',
    component: EditAccordComponent,
  },
  {
    path: 'accord',
    component: AccordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
