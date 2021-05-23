import { WeatherSummary } from './weather.model';

export interface WeatherForecastResponse {
  city: {
    name: string
  };

  cnt: number;

  list: WeatherForecastResponseItem[];
}

export interface WeatherForecastResponseItem {
  dt: number;

  temp: {
    day: number;
    min: number;
    max: number;
  };

  weather: {
    main: WeatherSummary
  }[];
}
