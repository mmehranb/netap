import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, RouterModule],
  declarations: [ShellComponent, HeaderComponent, MenuComponent],
})
export class ShellModule {}
