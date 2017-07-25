import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';
console.log('Running AOT compiled');
// import './assets/style.css';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);