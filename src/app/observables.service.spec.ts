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

  afterEach(() => {
    scheduler.flush();
  })

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

  it('should emit the ingredients at the correct time', () => {
    scheduler.run(({ expectObservable }) => {
      const expectedMarble = '1s a 999ms b 999ms c 999ms d 999ms (e|)';
      const expectedValues = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4
      };

      expectObservable(service.five$)
        .toBe(expectedMarble, expectedValues)
    });
  });

  it('should emit the ingredients at the correct time', () => {
    scheduler.run(({ expectObservable }) => {
      const expectedMarble = '1s a 999ms b 999ms c 999ms (d|)';
      const expectedValues = {
        a: 'Batman',
        b: 'Spiderman',
        c: 'Superman',
        d: 'Ironman'
      };

      expectObservable(service.heroes$)
        .toBe(expectedMarble, expectedValues)
    });
  });
});
