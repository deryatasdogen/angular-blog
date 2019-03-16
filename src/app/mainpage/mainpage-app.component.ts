import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';


@Component({
  selector: 'app-mainpage-app',
  template: `
    <app-toolbar></app-toolbar>
  `,
  styles: []
})
export class MainpageAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
