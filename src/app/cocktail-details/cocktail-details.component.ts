import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  drink: any;
  message: any;

  constructor( private location: Location, private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.sharedMessage.subscribe(message => this.drink = message)
  }

  goBack(): void {
    this.location.back();
  }

}
