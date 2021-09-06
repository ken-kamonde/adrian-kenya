import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.component.html',
  styleUrls: ['./add-cocktail.component.scss']
})
export class AddCocktailComponent implements OnInit {

  private backupTask: Partial<Cocktail> = { ...this.data.cocktail };

  constructor(
    public dialogRef: MatDialogRef<AddCocktailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddCocktailData
  ) { }

  cancel(): void {
    this.data.cocktail.idDrink = this.backupTask.idDrink;
    this.data.cocktail.strDrink = this.backupTask.strDrink ;
    this.data.cocktail.strDrinkThumb = this.backupTask.strDrinkThumb;
    this.data.cocktail.strInstructions = this.backupTask.strInstructions ;
    this.dialogRef.close(this.data);

    // const data = { 
    //   strDrink: this.backupTask.strDrink, 
    //   idDrink: this.backupTask.idDrink, 
    //   strDrinkThumb: this.backupTask.strDrinkThumb, 
    //   strInstructions: this.backupTask.strInstructions }
  }

  
  

  ngOnInit(): void {
  }

}

export interface AddCocktailData {
  cocktail: Partial<Cocktail>;
  enableDelete: boolean;
}

export interface CocktailDialogResult {
  cocktail: Cocktail;
  delete?: boolean;
}
