import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {  environment } from './app/';
import { RootComponent } from './app/root.component'

if (environment.production) {
  enableProdMode();
}

bootstrap(RootComponent);

