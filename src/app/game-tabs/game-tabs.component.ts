import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Game;
  constructor() { }

  imageObject: Array<object> = [];
  ngOnInit(): void {
    for (const trailer of this.game.trailers){
      this.imageObject.push({
        video: trailer.data.max,
        thumbImage: trailer.preview,
        title: trailer.name
      })
    }
    console.log(this.imageObject)
  }


}
