import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {DashboardHeroComponent} from "./dashboard-hero/dashboard-hero.component";
import {SharedModule} from "../../shared/shared/shared.module";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations:[DashboardComponent,DashboardHeroComponent],
  imports:[RouterModule.forChild(routes),SharedModule]
})
export class DashboardModule {

}
