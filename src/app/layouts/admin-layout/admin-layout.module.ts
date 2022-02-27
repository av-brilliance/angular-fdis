import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { BranchesComponent }           from '../../branches/branches.component';
import { AuditComponent }      from '../../pages/typography/typography.component';
import { AdminComponent }           from '../../pages/admin/admin.component';
import { ClientsComponent }            from '../../pages/clients/clients.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { CreateBranchComponent } from 'app/branches/create/create.component';
// import {RemoveAdminComponent } from 'app/pages/admin/remove-admin/remove-admin.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms'
// import { FormBuilder } from '@angular/forms';// import { LoginComponent } from '../login/login.component';
import { PerformerUpdateComponent } from '../../pages/performers/performer_update/performer-update.component';
import { ClientsUpdateComponent } from '../../pages/clients/clients-update/clients-update.component';
import { ClientsCreateComponent } from '../../pages/clients/clients-create/clients-create.component';
import { EditComponent } from '../../branches/edit/edit.component';

import { BrowserModule } from '@angular/platform-browser';
// import { NgxPaginationModule } from 'ngx-pagination';
import { PasswordResetComponent } from '../../pages/password-reset/password-reset.component';
import { RemoveUserComponent } from '../../pages/remove-user/remove-user.component';
import {RemoveAdminComponent} from '../../pages/admin/remove-admin/remove-admin.component'
import { CreateAdminComponent } from '../../pages/admin/create/create.component';
import { UpdateComponent } from '../../pages/admin/update/update.component';
// import { CreateBranchComponent } from '../../branches/create/create.component';
import { CreateClientsComponent } from '../../pages/clients/create-clients/create-clients.component';
import { CreatePerformersComponent } from '../../pages/performers/create-performers/create-performers.component';
import { PerformersComponent } from '../../pages/performers/performers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
    // FormBuilder
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    BranchesComponent,
    UpgradeComponent,
    AuditComponent,
    AdminComponent,
    ClientsComponent,
    NotificationsComponent,
    //  RemoveAdminComponent  
    // LoginComponent
    CreateBranchComponent,
    
    CreateBranchComponent,
    CreateClientsComponent,
    CreatePerformersComponent,
    PerformersComponent,
    // LoginComponent,
    PerformerUpdateComponent,
    ClientsUpdateComponent,
    ClientsCreateComponent,
    EditComponent,
    PasswordResetComponent,
    RemoveUserComponent,
    // LoginComponent,
    PerformerUpdateComponent,
    ClientsUpdateComponent,
    ClientsCreateComponent,
    EditComponent,
    PasswordResetComponent,
    RemoveUserComponent,
  ]
})

export class AdminLayoutModule {}
