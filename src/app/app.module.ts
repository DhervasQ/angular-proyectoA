import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageInitComponent } from './pages/page-init/page-init.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { PageManageComponent } from './pages/page-manage/page-manage.component';
import { ProductComponent } from './shared/components/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageInitComponent,
    FooterComponent,
    PageProductsComponent,
    PageManageComponent,
    ProductComponent

  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
