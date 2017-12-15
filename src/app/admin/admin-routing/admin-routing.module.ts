import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminUsersComponent } from './../admin-users/admin-users.component';
import { AdminUsersInsertComponent } from './../admin-users-insert/admin-users-insert.component';

import { OrdersComponent } from './../orders/orders.component';
import { ProductCategoriesComponent } from './../product-categories/product-categories.component';
import { ProductCategoryInsertComponent } from './../product-category-insert/product-category-insert.component';
import { ProductsComponent } from './../products/products.component';
import { ProductInsertComponent } from './../product-insert/product-insert.component';
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
          },
          {
            path: 'categories',
            component: ProductCategoriesComponent,
            pathMatch: 'full'
          },
          {
            path: 'addCategory',
            component: ProductCategoryInsertComponent,
            pathMatch: 'full'
          },
          {
            path: 'products',
            component: ProductsComponent,
            pathMatch: 'full'
          },
          {
            path: 'addProducts',
            component: ProductInsertComponent,
            pathMatch: 'full'
          },
          {
            path: 'orders',
            component: OrdersComponent,
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
