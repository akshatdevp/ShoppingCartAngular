import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
}
)
export class CartService {
  items=[];
  constructor(private http:HttpClient) { }
  addToCart(item)
  {
    this.items.push(item);
  }
  getCart()
  {
    return this.items;
  }
  clearCart()
  { 
    this.items=[];
  }
  getShippingPrices()
  {
    console.log("HERE!!!");
    return this.http.get('/assets/shipping.json');
  }
  
}