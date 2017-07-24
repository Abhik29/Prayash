import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';
import './assets/style.css';
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);