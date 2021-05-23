import { Injectable } from '@angular/core';

// Note: We could create a data source service for the weather and zipcode data potentially.

/**
 * Since this is a list, we always need to retrieve the list, before updating, and re-saving.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private zipCodesStorageKey = 'zipCodes';

  addZipCode(zipCode: number): number[] {
    let zipCodes = this.getZipCodes();
    zipCodes.push(zipCode);

    // Remove duplicates:
    const zipCodesSet = new Set(zipCodes);
    zipCodes = Array.from(zipCodesSet);

    this.saveZipCodes(zipCodes);

    return zipCodes;
  }

  getZipCodes(): number[] {
    const localStorageValue = localStorage.getItem('zipCodes');

    return localStorageValue
      ? JSON.parse(localStorageValue) as number[]
      : [];
  }

  removeZipCode(zipCodeToRemove: number): number[] {
    let zipCodes = this.getZipCodes();
    const zipCodeToRemoveIndex = zipCodes.findIndex(zipCode => zipCode === zipCodeToRemove);
    zipCodes.splice(zipCodeToRemoveIndex, 1);
    this.saveZipCodes(zipCodes);

    return zipCodes;
  }

  private saveZipCodes(zipCodes: number[]): void {
    localStorage.setItem(this.zipCodesStorageKey, JSON.stringify(zipCodes));
  }
}
