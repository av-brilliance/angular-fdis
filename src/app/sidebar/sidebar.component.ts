import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'',       class: '' },
    { path: '/admin',         title: 'Administrators',             icon:'',    class: '' },
    { path: '/branches',          title: 'Branches',              icon:'',      class: '' },
    { path: '/clients',     title: 'Clients',     icon:'',    class: '' },
    { path: '/performer',          title: 'Performer',      icon:'',  class: '' },
    { path: '/report',         title: 'Report Texts',        icon:'',    class: '' },
    { path: '/audit',    title: 'Quality Audit',        icon:'', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
