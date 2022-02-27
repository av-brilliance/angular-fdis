import { Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { BranchesComponent } from '../../branches/branches.component';
import { AuditComponent } from '../../pages/typography/typography.component';
import { AdminComponent } from '../../pages/admin/admin.component';
import { ClientsComponent } from '../../pages/clients/clients.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CreateAdminComponent } from 'app/pages/admin/create/create.component';
import { UpdateComponent } from 'app/pages/admin/update/update.component';

import { CreateBranchComponent } from 'app/branches/create/create.component';

import { PerformersComponent } from 'app/pages/performers/performers.component';
import { CreatePerformersComponent } from 'app/pages/performers/create-performers/create-performers.component';
import { LoginComponent } from '../login/login.component';
import { PerformerUpdateComponent } from 'app/pages/performers/performer_update/performer-update.component';
import { ClientsUpdateComponent } from 'app/pages/clients/clients-update/clients-update.component';
import { ClientsCreateComponent } from 'app/pages/clients/clients-create/clients-create.component';
import { EditComponent } from 'app/branches/edit/edit.component';
import { PasswordResetComponent } from 'app/pages/password-reset/password-reset.component';
import { RemoveUserComponent } from 'app/pages/remove-user/remove-user.component'; 
import {RemoveAdminComponent} from 'app/pages/admin/remove-admin/remove-admin.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'branches',          component: BranchesComponent },
    { path: 'audit',     component: AuditComponent },
    { path: 'admin',          component: AdminComponent },
    { path:'update/:id',component:UpdateComponent},
    { path: 'clients',           component: ClientsComponent },
    { path:'clients/create',component:ClientsCreateComponent},
    { path:'clients/update/:id',component:ClientsUpdateComponent},
    
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path:'admin/update/:id',component:UpdateComponent},
    { path:'admin/create',component:CreateAdminComponent},
    { path:'branches/create',component:CreateBranchComponent},
    
    {path:'branches/update/:id',component:EditComponent},
    {path:'performers/create',component:CreatePerformersComponent},
    {path:'performers',component:PerformersComponent},
    {path:'performers/update/:id',component:PerformerUpdateComponent},
    {path:'password/reset/:id',component:PasswordResetComponent},
    {path:'remove/user/:id',component:RemoveUserComponent},
    {path:'remove',component:RemoveAdminComponent}

];
