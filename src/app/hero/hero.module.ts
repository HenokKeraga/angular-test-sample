import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HeroDetailComponent} from "./hero-list/hero-detail/hero-detail.component";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {SharedModule} from "../shared/shared/shared.module";

const routes:Routes=[
  { path: '',    component: HeroListComponent },
  { path: ':id', component: HeroDetailComponent }
]

@NgModule({
  declarations: [HeroDetailComponent,HeroListComponent],
  imports: [
   RouterModule.forChild(routes),SharedModule
  ]
})
export class HeroModule { }
