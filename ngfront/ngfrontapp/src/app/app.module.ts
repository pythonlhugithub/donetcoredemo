import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient ,   HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzacontrolComponent } from './pizzacontrol/pizzacontrol.component';
import { MemberService } from './services/member.service';
import { PzaServiceService } from './pza-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PizzacontrolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemberService, PzaServiceService, HttpClient],  
  bootstrap: [AppComponent]
})
export class AppModule { }
