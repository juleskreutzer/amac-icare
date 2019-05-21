import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductOverviewObjectGeneratorService {

  constructor() { }

  public getProductOverviewObjects(): object[] {
    const result: object[] = [];

    // iPhone
    result.push({
      url: '../../../assets/img/product-overview/iphone.png',
      name: 'iPhone',
      link: 'product/iphone'
    });

    // iPad
    result.push({
      url: '../../../assets/img/product-overview/ipad.png',
      name: 'iPad',
      link: 'product/ipad'
    });

    // Apple Watch
    result.push({
      url: '../../../assets/img/product-overview/apple-watch.png',
      name: 'Apple Watch',
      link: 'product/apple-watch'
    });

    // iMac
    result.push({
      url: '../../../assets/img/product-overview/imac.png',
      name: 'iMac',
      link: 'product/imac'
    });

    // Macbook
    result.push({
      url: '../../../assets/img/product-overview/macbook.png',
      name: 'Macbook',
      link: 'product/macbook'
    });

    // Overig
    result.push({
      url: '../../../assets/img/product-overview/apple.png',
      name: 'Overig',
      link: 'product/overig'
    });

    return result;
  }
}
