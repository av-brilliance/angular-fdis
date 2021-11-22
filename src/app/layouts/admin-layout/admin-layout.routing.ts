import { Routes } from '@angular/router';

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
// import {  } from '../../branches/branches.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'x',           component: UserComponent },
    { path: 'branches',          component: BranchesComponent },
    { path: 'audit',     component: AuditComponent },
    { path: 'admin',          component: AdminComponent },
    { path: 'clients',           component: ClientsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path:'admin/update',component:UpdateComponent},
    {path:'admin/create',component:CreateAdminComponent},
    {path:'branches/create',component:CreateBranchComponent},

];
