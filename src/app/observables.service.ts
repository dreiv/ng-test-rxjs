import { Injectable } from '@angular/core';
import { of, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  private heroes = ['Batman', 'Spiderman', 'Superman', 'Ironman']

  constructor() { }

  pizzaIngredients$ = of('dough', 'tomato', 'cheese', 'pepper', 'mushroom')

  five$ = interval(1000).pipe(take(5))

  heroes$ = interval(1000).pipe(
      take(this.heroes.length),
      map((_, index) => this.heroes[index])
    )
}
