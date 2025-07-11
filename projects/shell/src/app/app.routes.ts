import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
         canActivate: [MsalGuard],
        children: [
        {
            path: 'users',
            loadChildren: () =>
                loadRemoteModule({
                    type: 'module', 
                    remoteEntry: 'http://localhost:4201/remoteEntry.js',
                    //remoteEntry: 'https://swpyme.z19.web.core.windows.net/remoteEntry.js',
                    exposedModule: './routes'
                })
                .then(m => m.MFE_USERS_ROUTES),
                 canActivate: [MsalGuard]
        },
        ]
    },
];
