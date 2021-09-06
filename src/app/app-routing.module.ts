import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCocktailComponent } from './add-cocktail/add-cocktail.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cocktails', component: CocktailsComponent },
  { path: 'cocktail-details', component: CocktailDetailsComponent},
  { path: 'addcocktail', component: AddCocktailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
