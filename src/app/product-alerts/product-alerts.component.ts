import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html'
})
export class ProductAlertsComponent implements OnInit {

  @Input()product:Product | undefined;
  @Output()myEvent=new EventEmitter();
  constructor() { };

  ngOnInit(): void {
  }

}
