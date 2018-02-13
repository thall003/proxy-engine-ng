import { BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

// NgEngine Initial State
import * as ngEngineConfig from './app.ng-engine-config'

// NgEngine for NgPacks
import { NgEngineModule } from '../ngEngine'
// Routing Module
import { AppRoutingModule } from './app.routing.module'
// Root Component
import { AppComponent } from './app.component'
// Shared Module
import { SharedModule } from '../shared/shared.module'
// For Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Service Worker
import { ServiceWorkerModule } from '@angular/service-worker'

// Environment shim from CLI
import { environment } from '../../environments/environment'

// NgEngine AOT WORKAROUND HERE
Object.assign(ngEngineConfig.NG_ENGINE_TOKEN, ngEngineConfig.INITIAL_NG_ENGINE)
// NgEngine AOT WORKAROUND HERE

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'proxy-engine-ng'
    }),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgEngineModule.forRoot(ngEngineConfig.NG_ENGINE_TOKEN),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [
    ngEngineConfig.ngEngineProvider
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
