import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  onSelect(hero: Hero): void {
    this.messageService.add(`Heroes Component: Selected hero ${hero.name} id = ${hero.id} `)
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }  
  // getHeroes(): Observable<Hero[]>{
  //   const heroes = of(HEROES);
  //   return heroes;
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero) //(Name without id) as Hero, id will g later
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h!== hero)
    this.heroService.deleteHero(hero.id).subscribe();
  }


}
