import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonmanagerService } from './services/personmanager.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PersonEditComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [PersonmanagerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
