import { Routes } from '@angular/router';
import { UserListComponent } from './features/users/presentation/pages/user-list/user-list.component';

export const MFE_USERS_ROUTES: Routes = [
    {
        path: '',
        component: UserListComponent,
        pathMatch: 'full'
    }
];
