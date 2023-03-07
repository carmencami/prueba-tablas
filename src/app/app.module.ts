import { MatTableModule } from '@angular/material/table';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FiltrosComponent } from './filtros/filtros.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FiltrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    HttpClientModule,
    MatTableModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
