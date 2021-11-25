import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { ExerciceRoutingModule } from './exercice/exercice-routing.module';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderTotoInterceptor } from './interceptors/header-toto.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    NotFoundComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExerciceRoutingModule,
    SharedModule
  ],providers: [
    {provide: HTTP_INTERCEPTORS, useClass:HeaderTotoInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
