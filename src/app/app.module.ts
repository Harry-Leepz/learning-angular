import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentsAndDatabindingComponent } from './components-and-databinding/components-and-databinding.component';
import { FormElementComponent } from './components-and-databinding/form-element/form-element.component';
import { ServerElementComponent } from './components-and-databinding/server-element/server-element.component';

@NgModule({
  declarations: [AppComponent, ServersComponent, DirectivesComponent, ComponentsAndDatabindingComponent, FormElementComponent, ServerElementComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
