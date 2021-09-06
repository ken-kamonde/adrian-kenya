import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})


export class CocktailService {
  
  private REST_API_SERVER = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  constructor(
    private httpClient: HttpClient,
    private store: AngularFirestore
  ) {}

  public sendGetRequest(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  public saveToFirebase(data: any) {
    data.drinks.forEach((element: any) => {
      const doc = this.store.collection('drink').doc(element.idDrink);
      doc.set(element);
    });
  }

  public getDrinks(): Observable<any> {
    return this.store.collection('drink').valueChanges
    ();
  }
}
