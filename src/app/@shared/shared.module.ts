import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoaderComponent, FormFieldComponent],
  exports: [LoaderComponent, FormFieldComponent],
})
export class SharedModule {}
