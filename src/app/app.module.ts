import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [AppComponent, MyComponentComponent, ChildComponent, RadioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
