import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServersComponent } from './servers/servers.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [AppComponent, TestComponent, ServersComponent, DirectivesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
