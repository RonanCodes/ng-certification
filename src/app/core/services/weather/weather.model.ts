export enum WeatherSummary {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
  Snow = 'Snow',
  Sun = 'Sun'
}

export interface WeatherResponse {
  weather: {
    main: WeatherSummary
  }[];

  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
  };

  name: string;
}
