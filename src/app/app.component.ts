import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'consumoApi';
  http = inject(HttpClient);
  products:Product[]=[];

  changeTitle()
  {
    this.title ='Esto es un nuevo titulo';
  }

  ngOnInit()
  {
    this.http.get('https://api.escuelajs.co/api/v1/products').subscribe((data:any)=>{this.products=data;})
  }
}
