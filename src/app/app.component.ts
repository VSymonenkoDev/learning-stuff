import {Component, OnInit} from '@angular/core';
import {CardsService} from './cards.service';
import {ICard} from './models/cards';
import {switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'learning-stuff';
  cards: ICard[];

  constructor(public cardsSrv: CardsService) {
  }

  ngOnInit() {
    this.getCards();
  }

  getCards() {
    this.cardsSrv.getCards()
      .pipe(take(1))
      .subscribe((cards: ICard[]) => {
        this.cards = cards;
      });
  }

  createCard(card: ICard) {
    this.cardsSrv.createCard(card)
      .pipe(
        take(1),
        switchMap(() => this.cardsSrv.getCards())
      )
      .subscribe((cards: ICard[]) => {
        this.cards = cards;
    });
  }
}
