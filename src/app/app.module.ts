import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BannerComponent} from './banner/banner/banner.component';
import {WelcomeComponent} from './welcome/welcome/welcome.component';
import {DashboardModule} from "./dashboard/dashboard/dashboard.module";
import {HttpClientModule} from "@angular/common/http";
import { HeroListComponent } from './hero/hero-list/hero-list.component';
import { HeroDetailComponent } from './hero/hero-list/hero-detail/hero-detail.component';
import {HeroModule} from "./hero/hero.module";


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
