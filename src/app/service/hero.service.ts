import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hero} from "../model/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url=" http://localhost:3000/heros"

  constructor(private  http:HttpClient) { }

  getAllHeros():Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }

  getHero(id: string):Observable<Hero>{
    return this.http.get<Hero>(`${this.url}/${id}`)
  }


  updateHero( hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.url}/${hero.id}`, hero)
  }
}
