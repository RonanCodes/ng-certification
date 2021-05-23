import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';

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
    console.log('#removeZipCode()', { zipCodeToRemove });

    // Could put this duplicated logic in a util class:
    const zipCodeToRemoveIndex = this.zipCodes.findIndex(zipCode => zipCode === zipCodeToRemove);
    this.zipCodes.splice(zipCodeToRemoveIndex, 1);
    this.localStorageService.removeZipCode(zipCodeToRemove);


    // Note: I'm updating the list here instead of getting completely fresh in order to less the amount of network and storage requests for efficiency,
    // you could refresh everything if you wanted.
  }

  addZipCode(newZipCode: number): void {
    if (!this.zipCodes.includes(newZipCode)) {
      this.zipCodes.push(newZipCode);
      this.localStorageService.addZipCode(newZipCode);
    }
  }
}
