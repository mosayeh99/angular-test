import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FacebookService } from 'ngx-facebook';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), FacebookService]
};
