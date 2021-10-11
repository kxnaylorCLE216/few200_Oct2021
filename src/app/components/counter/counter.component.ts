import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$!: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(s => s.counter.current);
  }

  increment() {
    const whatJustHappened = {
      type: 'incremented count'
    };
    this.store.dispatch(whatJustHappened);
  }

  decrement() {
    this.store.dispatch({ type: 'decremented count' })
  }

}
