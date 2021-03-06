import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BookingModule,

    SharedModule,
    BrowserAnimationsModule,

    UserModule,
    HomeModule,

    CoreModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
