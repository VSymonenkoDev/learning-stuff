import {Component, EventEmitter, Output} from '@angular/core';
import {ICard} from '../models/cards';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {

  cardData: ICard = {question: '', answer: ''};

  @Output() card: EventEmitter<ICard> = new EventEmitter();

  setFormData() {
    this.card.emit(this.cardData);
    this.cardData = {question: '', answer: ''};
  }
}


