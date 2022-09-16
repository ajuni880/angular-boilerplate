import { HttpClientModule } from '@angular/common/http'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { LoggedInGuard } from './guards/loggedin.guard'

@NgModule({
  imports: [HttpClientModule],
  providers: [
    LoggedInGuard,
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    } */
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core:CoreModule ) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }
}