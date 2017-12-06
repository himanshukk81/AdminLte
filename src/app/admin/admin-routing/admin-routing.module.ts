import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminUsersComponent } from './../admin-users/admin-users.component';
import { AdminUsersInsertComponent } from './../admin-users-insert/admin-users-insert.component';

@NgModule({

  
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'users',
            pathMatch: 'full'
          },
          {
            path: 'users',
            component: AdminUsersComponent,
            pathMatch: 'full'
          },
          {
            path: 'dashboard2',
            component: AdminDashboard2Component,
            pathMatch: 'full'
          },
          {
            path: 'saveUser',
            component: AdminUsersInsertComponent,
            pathMatch: 'full'
          }  
        ]
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
