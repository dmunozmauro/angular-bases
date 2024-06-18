import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: '../counter/counter.component.html'
})

export class CounterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    public counter: number = 0;

    increaseBy(value: number): void {
        this.counter += value;
    }

    reset(value: number): void {
        this.counter = value;
    }
}