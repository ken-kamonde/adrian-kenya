import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from '../classes/cocktail';
import { CocktailService } from '../services/cocktail.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
})
export class CocktailsComponent implements OnInit {
  @Input() cocktail: Cocktail | null = null;
  // @Output() edit = new EventEmitter<Cocktail>();
  drink: any = [];

  constructor(
    private dataService: CocktailService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data) => {
      this.dataService.saveToFirebase(data);
    });
    this.getDrinks();
  }

  getDrinks() {
    this.dataService.getDrinks().subscribe((val) => {
      this.drink = [];
      val.forEach((element: any) => {
        this.drink.push(element);
      });
    });
  }

  goCocktails(idDrink: any) {

    this.messageService .nextMessage(idDrink)
    this.router.navigate(['/cocktail-details']);

  }

  filterCocktails(searchValue:any) {
      
    this.drink = this.drink.filter((drink: any) => drink.strDrink.toLowerCase().includes(searchValue.target.value) );

  }

}
