import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObservablesService } from './observables.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private componentDestroyed$ = new Subject();

  constructor(private observablesService: ObservablesService) {}

  ngOnInit() {
    this.observablesService.pizzaIngredients$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(console.log)
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
  }
}
