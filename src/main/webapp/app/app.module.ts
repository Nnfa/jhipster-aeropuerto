import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AeropuertoSharedModule } from 'app/shared/shared.module';
import { AeropuertoCoreModule } from 'app/core/core.module';
import { AeropuertoAppRoutingModule } from './app-routing.module';
import { AeropuertoHomeModule } from './home/home.module';
import { AeropuertoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AeropuertoSharedModule,
    AeropuertoCoreModule,
    AeropuertoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AeropuertoEntityModule,
    AeropuertoAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class AeropuertoAppModule {}
