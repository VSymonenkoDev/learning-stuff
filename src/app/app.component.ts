import {Component, OnInit} from '@angular/core';
import {CardsService} from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learning-stuff';

  constructor(public cardsSrv: CardsService) {}

  ngOnInit() {
    this.cardsSrv.createCard().subscribe((card) => {
      console.log(card);
    });

    this.cardsSrv.getCards().subscribe((cards) => {
      console.log(cards);
    });
  }
}
