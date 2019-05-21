import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ProductChooserComponent } from './components/product-chooser/product-chooser.component';
import { FamilyChooserComponent } from './components/family-chooser/family-chooser.component';

const routes: Routes = [
  {
    path: '', component: OverviewComponent
  },
  {
    path: 'product/:family', component: FamilyChooserComponent
  },
  {
    path: 'product/:family/:device', component: ProductChooserComponent
  },
  {
    path: '**', redirectTo: '/'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ProductChooserComponent,
    FamilyChooserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
