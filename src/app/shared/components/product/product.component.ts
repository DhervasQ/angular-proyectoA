import { Component,Input } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() name!: any;
  @Input() image!: any;
  @Input() description!: any;
  @Input() price!: any;
  @Input() stars!: any;

}
