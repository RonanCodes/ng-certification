import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

// Note: This is a dumb component, the parent will take care of how to handle a zipCode being added and removed via local storage.
@Component({
  selector: 'app-zip-code-input',
  templateUrl: './zip-code-input.component.html',
  styleUrls: ['./zip-code-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZipCodeInputComponent {
  @Output() zipCodeAdded = new EventEmitter<number>();

  public addLocation(zipCodeInputValue: string): void {
    const zipCode = +zipCodeInputValue;
    if (zipCode) {
      this.zipCodeAdded.emit(zipCode);
    }
  }

}
