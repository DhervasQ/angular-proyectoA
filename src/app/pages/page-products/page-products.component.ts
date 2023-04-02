import { ServiceProductsService } from './../../shared/services/service-products.service';
import { Component, Input, OnInit } from '@angular/core';
// import { ProductsGallery } from '../../models/productsGallery.interfaces';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit{
  constructor(private ServiceProductsService: ServiceProductsService) {}
  datos: any;
  ngOnInit() {
    this.ServiceProductsService.getProducts().subscribe((res) => {
      this.datos = res;
    });
  }

  values = '';
  onKey(event: any) { // without type info
    this.values = event.target.value
    let elementos = document.querySelectorAll("#name");
    var arrayElementos = Array.prototype.slice.call(elementos);
    var filtrados=arrayElementos.filter(elemento=>{
     return elemento.innerText.includes(this.values);
    })
    console.log(filtrados);
    let cards = document.querySelectorAll("#cards");
    var arrayCards = Array.prototype.slice.call(cards);
    arrayCards.forEach(card=>
      {card.appendChild(filtrados);}
  )};

}
