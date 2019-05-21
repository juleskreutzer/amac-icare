import { Component, OnInit } from '@angular/core';
import { ProductOverviewObjectGeneratorService } from 'src/app/service/product-overview-object-generator.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  productOverview: object[] = []

  constructor(private productOverviewGenerator: ProductOverviewObjectGeneratorService) {
    this.productOverview = this.productOverviewGenerator.getProductOverviewObjects();
   }

  ngOnInit() {
  }

}
