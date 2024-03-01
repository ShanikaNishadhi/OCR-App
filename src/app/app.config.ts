import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OcrComponent } from './ocr/ocr.component';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
