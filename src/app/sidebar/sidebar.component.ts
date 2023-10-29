import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Welcome', icon: 'nc-air-baloon', class: ''},
  {path: '/icons', title: 'Art Works', icon: 'nc-diamond', class: ''},
  {path: '/maps', title: 'Upload Your Work', icon: 'nc-cloud-upload-94', class: ''},
  {path: '/notifications', title: 'About Us', icon: 'nc-bell-55', class: ''},

  // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
  // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
  // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
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
