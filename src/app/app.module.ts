import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core';
import { SharedModule } from '@shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ServcoComponent } from './permissions/servco/servco.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AgentsComponent } from './agents/agents.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ShellModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    PortfoliosComponent,
    AboutComponent,
    ContactUsComponent,
    PermissionsComponent,
    ServcoComponent,
    HomeComponent,
    AgentsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
