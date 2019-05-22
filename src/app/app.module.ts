import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CardsService} from './cards.service';
import {CardsListComponent} from './cards-list/cards-list.component';
import {CardFormComponent} from './card-form/card-form.component';
import {MatFormFieldModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [
    CardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
