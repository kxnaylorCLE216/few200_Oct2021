import { Component, OnInit } from '@angular/core';
import { AppState, selectCounterCurrent, selectCountToGoal } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  current$!: Observable<number>;
  toGo$!: Observable<number>;


  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCounterCurrent);
    this.toGo$ = this.store.select(selectCountToGoal);
  }







}
