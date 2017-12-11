import { AdminModule } from './admin/admin.module';
import { StarterModule } from './starter/starter.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
// import { StarterFormsComponent } from './starter/starter-forms/starter-forms.component';
import { StarterFormsComponent } from './starter/starter-forms/starter-forms.component';
// import { AdminLoginComponent } from './login/login.component';
import { LoginComponent } from './login/login.component';
import { SessionService } from './session.service';
import { environment } from '../environments/environment';
import { AngularFireDatabase, FirebaseListObservable,AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
// import {FileUpload} from './fileupload';
import { MessagingService } from "./messaging.service";
import { AngularFireAuth }     from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { AuthService } from './admin/auth.service';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { WindowService } from './window.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreComponent } from './firestore/firestore.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PhoneLoginComponent,
    FirestoreComponent
    
    // StarterComponent,
    // StarterHeaderComponent,
    // StarterLeftSideComponent,
    // StarterContentComponent,
    // StarterFooterComponent,
    // StarterControlSidebarComponent,
    // StarterFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StarterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [SessionService,AngularFireDatabase,MessagingService,AngularFireAuth,AuthService,WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
