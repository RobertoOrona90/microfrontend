import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
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
                .then(m => m.MFE_USERS_ROUTES)
        },
        ]
    },
];
