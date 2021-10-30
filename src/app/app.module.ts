import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './layaout/navbar/navbar.component';
import { TopComponent } from './layaout/top/top.component';
import { FooterComponent } from './layaout/footer/footer.component';
import { AccordComponent } from './accord/accord.component';
import { ListAccordComponent } from './accord/list-accord/list-accord.component';
import { EditAccordComponent } from './accord/edit-accord/edit-accord.component';
import { AddAccordComponent } from './accord/add-accord/add-accord.component';
import { ItemAccordComponent } from './accord/item-accord/item-accord.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    TopComponent,
    FooterComponent,
    AccordComponent,
    ListAccordComponent,
    EditAccordComponent,
    AddAccordComponent,
    ItemAccordComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
