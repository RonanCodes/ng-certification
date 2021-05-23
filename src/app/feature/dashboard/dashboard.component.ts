import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';

/**
 * Even though we get a new list on add or remove of a zipCode from the local storage service,
 * The child WeatherCardComponents zipCode setter string value does not change, so no extra requests for existing data needed.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Note: We could also create a zipCode data store/source instead of passing it around:
  public zipCodes: number[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.zipCodes = this.localStorageService.getZipCodes();
  }

  removeZipCode(zipCodeToRemove: number): void {
    this.zipCodes = this.localStorageService.removeZipCode(zipCodeToRemove);
  }

  addZipCode(newZipCode: number): void {
    if (!this.zipCodes.includes(newZipCode)) {
      this.zipCodes = this.localStorageService.addZipCode(newZipCode);
    }
  }
}
