import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  ngOnInit()
  {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

   ngOnDestroy()
  {
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
