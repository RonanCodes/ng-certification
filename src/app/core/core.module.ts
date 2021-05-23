import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * This module contains:
 * - The core singleton services used throughout the application.
 * - Modules that should only be instantiated once.
 */
@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class CoreModule { }
