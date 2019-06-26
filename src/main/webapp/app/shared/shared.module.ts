import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DzzcIntranetSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DzzcIntranetSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DzzcIntranetSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DzzcIntranetSharedModule {
  static forRoot() {
    return {
      ngModule: DzzcIntranetSharedModule
    };
  }
}
