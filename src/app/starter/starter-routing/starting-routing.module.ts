// import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
// import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter.component';
import { StarterFormsComponent } from './../starter-forms/starter-forms.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarterUsersComponent } from './../starter-users/starter-users.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'starter',
        component: StarterComponent,
        children: [
          {
            path: '',
            redirectTo: 'forms',
            pathMatch: 'full'
          },
          {
            path: 'forms',
            component: StarterFormsComponent
          },
          {
            path: 'users',
            component: StarterUsersComponent
          }
          
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StartingRoutingModule { }
