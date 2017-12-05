import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(public  router: Router) { }

  ngOnInit()
  {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');

    // this.router.navigate(['/dashboard1']);
  }

   ngOnDestroy()
  {
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
