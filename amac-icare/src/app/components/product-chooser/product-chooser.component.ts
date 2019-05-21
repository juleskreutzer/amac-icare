import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductChooserObjectGeneratorService } from 'src/app/service/product-chooser-object-generator.service';

@Component({
  selector: 'app-product-chooser',
  templateUrl: './product-chooser.component.html',
  styleUrls: ['./product-chooser.component.css']
})
export class ProductChooserComponent implements OnInit {

  device: string;
  family: string;
  productOverview: object

  constructor(private route: ActivatedRoute, private productChooserService: ProductChooserObjectGeneratorService) { 
    this.route.params.subscribe(params => {
        this.device = params['device'];
        this.family = params['family'];
        console.log(this.family);

        this.productOverview = this.productChooserService.getiPhonePricing(this.device);
        console.log(this.productOverview);
    });
  }

  ngOnInit() {
  }

}
