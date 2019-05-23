import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ICard} from './models/cards';

@Injectable()
export class CardsService {

  constructor(public http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get('/api/cards')
      .pipe(map(res => res));
  }

  createCard(card: ICard): Observable<any> {
    console.log(card);
    return this.http.post('/api/card', card)
      .pipe(map(res => res));
  }

  updateCard(id: string): Observable<any> {
    return this.http.put(`/api/card/${id}`, {question: 'update', answer: 'update'})
      .pipe(map(res => res));
  }

  deleteCard(id: string): Observable<any> {
    return this.http.delete(`/api/card/${id}`)
      .pipe(map(res => res));
  }
}
