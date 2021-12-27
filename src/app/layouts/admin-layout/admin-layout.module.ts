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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms'
// import { FormBuilder } from '@angular/forms';// import { LoginComponent } from '../login/login.component';

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
    // LoginComponent
    // CreateBranchComponent
  ]
})

export class AdminLayoutModule {}
