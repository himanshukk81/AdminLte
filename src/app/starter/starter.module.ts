import { StartingRoutingModule } from './starter-routing/starting-routing.module';
import { StarterFormsComponent } from './starter-forms/starter-forms.component';
import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { StarterLeftSideComponent } from './starter-left-side/starter-left-side.component';
import { StarterHeaderComponent } from './starter-header/starter-header.component';
import { StarterComponent } from './starter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarterUsersComponent } from './starter-users/starter-users.component';
// import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';

@NgModule({
  imports: [
    CommonModule,
    StartingRoutingModule
  ],
  declarations: [
    StarterFormsComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    StarterComponent,
    StarterUsersComponent
  ],
  exports: [StarterComponent]
})
export class StarterModule { }
