import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectList } from './projectList/list.component';
import { HrComponent } from './hr/hr.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './projectList/project/project.component';
import { ButtonsBarComponent } from './shared/buttons-bar/buttons-bar.component';
import { VisibleDirective } from './visible.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectList,
    HrComponent,
    ProjectComponent,
    ButtonsBarComponent,
    VisibleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
