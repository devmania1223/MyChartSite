// Ui module to define the base application layout
// The base layout include:
//  - header with navigation bar
//  - container
//  - footer
//  - the base layout (header + container + footer)

// Angular base modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
// Ui components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, ContainerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
