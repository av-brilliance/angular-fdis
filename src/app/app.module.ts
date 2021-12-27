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
import { HttpClientModule } from "@angular/common/http";
import { PerformerUpdateComponent } from './pages/performers/performer_update/performer-update.component';
import { ClientsUpdateComponent } from './pages/clients/clients-update/clients-update.component';
import { ClientsCreateComponent } from './pages/clients/clients-create/clients-create.component';
import { EditComponent } from './branches/edit/edit.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    // BrowserModule,
    // NgxPaginationModule,
    // FormsModule,
    AppComponent,
    AdminLayoutComponent,
    CreateAdminComponent,
    UpdateComponent,
    CreateBranchComponent,
    CreateClientsComponent,
    CreatePerformersComponent,
    PerformersComponent,
    LoginComponent,
    PerformerUpdateComponent,
    ClientsUpdateComponent,
    ClientsCreateComponent,
    EditComponent,
  
   

  ],
  imports: [
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
