import { Component, OnInit } from '@angular/core';
import {Hero} from "../../../model/hero";
import {HeroService} from "../../../service/hero.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero :Hero

  constructor(private heroService:HeroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(pmap => this.getHero(pmap.get('id')));
  }
  private getHero(id: string): void {
    // when no id or id===0, create new blank hero
    if (!id) {
      this.hero = { id: 0, name: '' } as Hero;
      return;
    }

    this.heroService.getHero(id).subscribe(hero => {
      if (hero) {
        this.hero = hero;
      } else {
        this.gotoList(); // id not found; navigate to list
      }
    });
  }

  save() {
    this.heroService.updateHero(this.hero).subscribe(() => this.gotoList());
  }

  cancel() {
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
