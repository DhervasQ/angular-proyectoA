import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseURL =
  'https://angular-shopeame-backend-livid.vercel.app/products';


@Injectable({
  providedIn: 'root',
})
export class ServiceProductsService
 {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(baseURL);
  }
  postProduct(data:any)  {
    return this.http.post(baseURL,data);
  }
}
