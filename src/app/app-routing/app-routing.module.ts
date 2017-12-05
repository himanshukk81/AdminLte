import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { AdminUsersComponent } from './../admin/admin-users/admin-users.component';
import { LoginComponent } from '../login/login.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'admin', component: AdminComponent,
          children: [
          { path: '', redirectTo: 'users', pathMatch: 'full' },
          { path: 'users', component: AdminUsersComponent }, 
          { path: 'dashboard2', component: AdminDashboard2Component }, 
        ]
      },  
      // { path: '', redirectTo: 'login', pathMatch: 'full' },
      // { path: 'login', component: AdminLoginComponent},
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
