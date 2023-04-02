
import { Component } from '@angular/core';
import { ServiceProductsService } from './../../shared/services/service-products.service';
import { ProductI } from '../../interfaces/product.interface';
let name='';
let stars='';
let description='';
let image='';
let price='';
@Component({
  selector: 'app-page-manage',
  templateUrl: './page-manage.component.html',
  styleUrls: ['./page-manage.component.scss'],
})
export class PageManageComponent {
  name:any;
  stars:any;
  description:any;
  image:any;
  price:any;
constructor(private ServiceProductsService: ServiceProductsService) {}

product: ProductI= {
  name: "",
  image:"",
  price: "",
  description:"",
  stars:""
};
  onButtonClick(): void {
    console.log('clicked!');
  

    this.ServiceProductsService.postProduct(this.product).subscribe((res) => {

    });
  }
}
