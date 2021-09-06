import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from '../services/cocktail.service';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  drink:any = [];

  constructor(private dataService: CocktailService, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.getDrinks();
  }

  getDrinks() {
    this.dataService.getDrinks().subscribe(val => {
      this.drink = [];
      val.forEach((element:any) => {
        this.drink.push(element)
      });
      this.drink = this.shuffleArray(this.drink).slice(0, 5)     
    })
  }

  shuffleArray(array:any = []) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  goCocktails(idDrink: any) {

    this.messageService .nextMessage(idDrink)
    this.router.navigate(['/cocktail-details']);
    
  }
}
