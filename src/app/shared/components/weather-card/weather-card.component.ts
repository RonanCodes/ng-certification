import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() zipCode: number | undefined = 95742;

  @Output() zipCodeRemoveInitiated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
