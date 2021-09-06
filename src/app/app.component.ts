import { Component } from '@angular/core';
import { Cocktail } from './classes/cocktail';
import { MatDialog } from '@angular/material/dialog';
import { AddCocktailComponent, CocktailDialogResult } from './add-cocktail/add-cocktail.component';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'adrian-kenya';


  drink = this.store.collection('drink') .valueChanges({ idField: 'idDrink' }) as Observable<Cocktail[]>;

  constructor(private dialog: MatDialog, private store: AngularFirestore) {}

  addCocktail(): void {
    const dialogRef = this.dialog.open(AddCocktailComponent, {
      width: '270px',
      data: {
        cocktail: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: CocktailDialogResult) => {
        if (!result) {
          return;
        }
        //this.store.collection('drink').add(result.cocktail)
        const doc = this.store.collection('drink').doc()
        doc.set(result.cocktail)
      });
  }
}
