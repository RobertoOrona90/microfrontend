import { CommonModule } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

export const MENU_ITEMS: any[] = [
   {
      icon: 'dashboard',
      name: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'person',
      name: 'Usuarios',
      route: 'users'
    },
    {
      icon: 'comment',
      name: 'Estilos',
      route: 'estilos'
    },
    {
      icon: 'comment',
      name: 'Roles y permisos',
      route: 'roles'
    }
];

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  readonly menuItems = signal(MENU_ITEMS);
  readonly collapsed = input<boolean>(false);
  sideNavCollapsed = signal(false);

  constructor() {
    effect(() => {
      this.sideNavCollapsed.set(this.collapsed());
    });
  }

}
