"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var FightComponent = (function () {
    function FightComponent(heroService) {
        this.heroService = heroService;
    }
    FightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    FightComponent.prototype.selectPlayer1 = function (hero) {
        this.selectedHero1 = hero;
        this.isEqual();
        this.habilitaBtn();
    };
    FightComponent.prototype.selectPlayer2 = function (hero) {
        this.selectedHero2 = hero;
        this.isEqual();
        this.habilitaBtn();
    };
    FightComponent.prototype.isEqual = function () {
        if (this.selectedHero1 === this.selectedHero2) {
            this.selectedHero1 = null;
            this.selectedHero2 = null;
        }
    };
    FightComponent.prototype.habilitaBtn = function () {
        if (this.selectedHero1 && this.selectedHero2 != null) {
            document.getElementById("btnStart").className = "";
        }
    };
    FightComponent.prototype.desabilitaBtn = function () {
        document.getElementById("btnStart").className = "disabled";
    };
    FightComponent.prototype.startFight = function () {
        var _this = this;
        this.desabilitaBtn();
        this.showBattle();
        // Simulate latency between 2 and 5 seconds delay
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.chooseWinner()); }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);
        });
    };
    FightComponent.prototype.chooseWinner = function () {
        // Campeão escolhido aleatoriamente
        switch (Math.floor(Math.random() * (1 - 0 + 1)) + 0) {
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
    };
    FightComponent.prototype.showBattle = function () {
        // Fazer algo pra retornar visualmente ao usuário que a luta começou
    };
    return FightComponent;
}());
FightComponent = __decorate([
    core_1.Component({
        selector: 'my-fight',
        templateUrl: './fight.component.html',
        styleUrls: ['./fight.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], FightComponent);
exports.FightComponent = FightComponent;
//# sourceMappingURL=fight.component.js.map