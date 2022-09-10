import { Input, Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
//router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //input is "hero" and type is "Hero" or null
  @Input() hero?: Hero | null;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  //1
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); //get id param from routing
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    if(this.hero) {
      this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack())
    }
  }

  goBack(): void {
    this.location.back()
  }

  //0
  ngOnInit(): void {
    this.getHero()
  }

}
