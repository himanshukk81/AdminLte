import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AdminUsersInsertComponent } from './admin-users-insert/admin-users-insert.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductCategoryInsertComponent } from './product-category-insert/product-category-insert.component';
import { ProductsComponent } from './products/products.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminUsersComponent,
    AdminUsersInsertComponent,
    OrdersComponent,
    ProductCategoriesComponent,
    ProductCategoryInsertComponent,
    ProductsComponent,
    ProductInsertComponent
    // UserOrdersComponent
    // AdminLoginComponent
  ],

  exports: [AdminComponent]
})
export class AdminModule { }
