import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-fight',
  templateUrl: './fight.component.html',
  styleUrls: [ './fight.component.css' ]
})

export class FightComponent implements OnInit {

  heroes: Hero[];
  selectedHero1: Hero;
  selectedHero2: Hero;
  winner: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  selectPlayer1(hero: Hero): void {
    this.selectedHero1 = hero;
    this.isEqual();
    this.habilitaBtn();
  }

  selectPlayer2(hero: Hero): void {
    this.selectedHero2 = hero;
    this.isEqual();
    this.habilitaBtn();
  }

  isEqual() {
    if (this.selectedHero1 === this.selectedHero2) {
      this.selectedHero1 = null;
      this.selectedHero2 = null;
    }
  }

  habilitaBtn() {
    if (this.selectedHero1 && this.selectedHero2 != null) {
      document.getElementById("btnStart").className = "";
    }
  }

  desabilitaBtn() {
    document.getElementById("btnStart").className = "disabled";
  }

  startFight(): Promise<Hero[]> {
          this.desabilitaBtn();
          this.showBattle();
          // Simulate latency between 2 and 5 seconds delay
          return new Promise(resolve => {
            setTimeout(() => resolve(this.chooseWinner()),
            Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);
          })
  }

  chooseWinner() : Hero {
  // Campeão escolhido aleatoriamente
  switch(Math.floor(Math.random() * (1 - 0 + 1)) + 0) {
     case 0: {
        this.habilitaBtn();
        return this.winner = this.selectedHero1;
     }
     case 1: {
        this.habilitaBtn();
        return this.winner = this.selectedHero2;
     }
     default: {
        break;
     }
   }
  }

  showBattle() {
    // Fazer algo pra retornar visualmente ao usuário que a luta começou
  }
}
