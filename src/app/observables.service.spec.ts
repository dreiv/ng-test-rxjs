import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { ObservablesService } from './observables.service';

describe('ObservablesService', () => {
  let service: ObservablesService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablesService);

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should stream the correct ingredients', () => {
    scheduler.run(({ expectObservable }) => {
      const expectedMarble = '(abcde|)';
      const expectedIngredients = {
        a: 'dough',
        b: 'tomato',
        c: 'cheese',
        d: 'pepper',
        e: 'mushroom'
      };

      expectObservable(service.pizzaIngredients$)
        .toBe(expectedMarble, expectedIngredients)
    });
  });
});
