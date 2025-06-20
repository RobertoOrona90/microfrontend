import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth } from '../../../../libs/auth/auth.provider';
import {   withComponentInputBinding } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MsalGuard, MsalInterceptor, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { MSALInstanceFactory, MSALGuardConfigFactory } from '../../../../libs/auth/msal-instance.factory' // './core/services/auth/msal-instance.factory';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
    //...provideAuth() // reutilizas desde lib
  ]
};
