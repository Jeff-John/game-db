import { HttpService } from './../services/http.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from './../models';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public gameRating: number = 0
  public gameId: string
  game: Game
  routeSub: Subscription
  gameSub: Subscription

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private HttpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.gameId = params["id"]
      this.getGameDetails(this.gameId)
    })
  }

  getGameDetails(id: string): void {
    this.gameSub = this.HttpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp
        setTimeout(() => {
          this.gameRating = Number(this.game.metacritic)
        }, 1000)
      })
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy():void{
    if  (this.gameSub){
      this.gameSub.unsubscribe()
    }
    if  (this.routeSub){
      this.routeSub.unsubscribe()
    }
  }
}
