import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageAppComponent } from './mainpage-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainpageAppComponent, SideNavComponent, ToolbarComponent, MainContentComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
  ]
})
export class MainpageModule { }
