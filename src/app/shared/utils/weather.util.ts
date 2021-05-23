import { WeatherSummary } from '@core/services/weather/weather.model';

enum WeatherImageName {
  Clouds = 'clouds',
  Rain = 'rain',
  Snow = 'snow',
  Sun = 'sun'
}

export class WeatherUtil {
  public static getWeatherImage(weatherSummary: WeatherSummary): WeatherImageName | string {
    console.log({ weatherSummary });

    switch (weatherSummary) {
      case WeatherSummary.Clouds:
        return this.getImageUrl(WeatherImageName.Clouds);
        break;
      case WeatherSummary.Rain:
        return this.getImageUrl(WeatherImageName.Rain);
        break;
      case WeatherSummary.Clear:
      case WeatherSummary.Sun:
        return this.getImageUrl(WeatherImageName.Sun);
        break;
      case WeatherSummary.Snow:
        return this.getImageUrl(WeatherImageName.Snow);
        break;
      default:
        return '';
        break;
    }
  }

  private static getImageUrl(weatherImageName: WeatherImageName): string {
    const baseUrl = 'assets/images/';

    return `${baseUrl}${weatherImageName}.png`;
  }
}
