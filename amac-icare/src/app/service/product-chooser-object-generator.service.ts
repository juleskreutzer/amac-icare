import { Injectable } from '@angular/core';
import iPhone from '../../assets/iphone.pricing.json';

@Injectable({
  providedIn: 'root'
})
export class ProductChooserObjectGeneratorService {

  constructor() { }

  public getiPhonePricing(device: string): object {
    return iPhone.iPhone[device];
  }
}
