import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile.component/create-profile.component';
import { CreateAccountComponent } from './create-account.component/create-account.component';
import { ChooseSchoolComponent } from './choose-school.component/choose-school.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    CreateProfileComponent,
    ChooseSchoolComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
