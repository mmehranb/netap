import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [FlexLayoutModule, CommonModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
})
export class SharedModule {}
