import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor() { }

  pizzaIngredients$ = of('dough', 'tomato', 'cheese', 'pepper', 'mushroom')
}
