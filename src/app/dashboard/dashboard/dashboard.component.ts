import {Component, OnInit} from '@angular/core';
import {Hero} from "../../model/hero";
import {HeroService} from "../../service/hero.service";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heros$: Observable<Hero[]>=of([])

  constructor(private heroService:HeroService,private router:Router) {

  }

  ngOnInit(): void {
   this.heros$=this.heroService.getAllHeros()
  }
  gotoDetail(hero: Hero) {
    const url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }

}
