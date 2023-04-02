import { PageInitComponent } from './pages/page-init/page-init.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { PageManageComponent } from './pages/page-manage/page-manage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageInitComponent,
  },
  {
    path: 'products',
    component:PageProductsComponent,
  },
  {
    path: 'manage',
    component:PageManageComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
