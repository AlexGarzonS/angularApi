import { Component, Input } from '@angular/core';
import {Product} from '../../../app/models/product.model'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  @Input() product!: Product;
}
