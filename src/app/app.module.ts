import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreateAdminComponent } from './pages/admin/create/create.component';
import { UpdateComponent } from './pages/admin/update/update.component';
import { CreateBranchComponent } from './branches/create/create.component';
import { CreateClientsComponent } from './pages/clients/create-clients/create-clients.component';
import { CreatePerformersComponent } from './pages/performers/create-performers/create-performers.component';
import { PerformersComponent } from './pages/performers/performers.component';
import { LoginComponent } from './layouts/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CreateAdminComponent,
    UpdateComponent,
    CreateBranchComponent,
    CreateClientsComponent,
    CreatePerformersComponent,
    PerformersComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
