import { Input, Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //input is "hero" and type is "Hero" or null
  @Input() hero?: Hero | null;

  onCancel(): void {    
    console.log(this.hero)
    this.hero = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
