import { PublicClientApplication, InteractionType, IPublicClientApplication } from '@azure/msal-browser';
import { MsalGuardConfiguration } from '@azure/msal-angular';
import { environment } from '../../libs/core/environments/environment';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export function MSALInstanceFactory(): IPublicClientApplication {
    const msalInstance = new PublicClientApplication({
        auth: {
            clientId: environment.clientId,
            authority: environment.authority,
            redirectUri: environment.redirectUri
        },
        cache: {
            cacheLocation: 'sessionStorage',
            storeAuthStateInCookie: isIE
        }
    });
    msalInstance.initialize();
    return msalInstance;
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
    return {
        interactionType: InteractionType.Redirect,
        authRequest: {
            scopes: ['user.read']
        }
    };
}

export function initializeAppFactory(msalInstance: IPublicClientApplication): () => Promise<void> {
    return () => msalInstance.initialize();
}