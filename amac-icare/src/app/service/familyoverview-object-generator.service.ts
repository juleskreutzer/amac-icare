import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamilyoverviewObjectGeneratorService {

  constructor() { }

  public getFamilyOverviewObject(familyType: string): object[] {
    switch (familyType.toLowerCase()) {
      case 'iphone':
        return this.getiPhoneFamilyOverviewObject();
      case 'ipad':
        return this.getiPadFamilyOverviewObject();
      case 'apple-watch':
        return this.getAppleWatchFamilyOverviewObject();
      case 'imac':
        return this.getiMacFamilyOverviewObject();
      case 'macbook':
        return this.getMacbookFamilyOverviewObject();
      default:
        return this.getOverigFamilyOverviewObject();
    }
  }

  private getiPhoneFamilyOverviewObject(): object[] {
    const result: object[] = [];

    result.push({
      name: 'iPhone 7',
      imageUrl: '../../../assets/img/product-overview/iPhone/7.png',
      link: '/product/iphone/7'
    });

    result.push({
      name: 'iPhone 7 Plus',
      imageUrl: '../../../assets/img/product-overview/iPhone/7plus.png',
      link: '/product/iphone/7plus'
    });

    result.push({
      name: 'iPhone 8',
      imageUrl: '../../../assets/img/product-overview/iPhone/8.png',
      link: '/product/iphone/8'
    });

    result.push({
      name: 'iPhone 8 Plus',
      imageUrl: '../../../assets/img/product-overview/iPhone/8plus.png',
      link: '/product/iphone/8plus'
    });

    result.push({
      name: 'iPhone X',
      imageUrl: '../../../assets/img/product-overview/iPhone/x.png',
      link: '/product/iphone/x'
    });

    result.push({
      name: 'iPhone Xr',
      imageUrl: '../../../assets/img/product-overview/iPhone/xr.png',
      link: '/product/iphone/xr'
    });

    result.push({
      name: 'iPhone Xs',
      imageUrl: '../../../assets/img/product-overview/iPhone/xs.png',
      link: '/product/iphone/xs'
    });

    result.push({
      name: 'iPhone Xs Max',
      imageUrl: '../../../assets/img/product-overview/iPhone/xsmax.png',
      link: '/product/iphone/xsmax'
    });

    return result;
  }

  private getiPadFamilyOverviewObject(): object[] {
    const result: object[] = [];

    result.push({
      name: 'iPad Pro 12.9',
      imageUrl: '../../../assets/img/product-overview/iPad/pro129.png',
      link: '/product/ipad/pro129'
    });

    result.push({
      name: 'iPad Pro 11',
      imageUrl: '../../../assets/img/product-overview/iPad/pro11.png',
      link: '/product/ipad/pro11'
    });

    result.push({
      name: 'iPad Air (3)',
      imageUrl: '../../../assets/img/product-overview/iPad/air.png',
      linK: '/product/ipad/air'
    });

    result.push({
      name: 'iPad',
      imageUrl: '../../../assets/img/product-overview/iPad/ipad.png',
      link: '/product/ipad/ipad'
    });

    result.push({
      name: 'iPad Mini',
      imageUrl: '../../../assets/img/product-overview/iPad/mini.png',
      link: '/product/ipad/mini'
    });

    return result;
  }

  private getAppleWatchFamilyOverviewObject(): object[] {
    return null;
  }

  private getiMacFamilyOverviewObject(): object[] {
    return null;
  }

  private getMacbookFamilyOverviewObject(): object[] {
    return null;
  }

  private getOverigFamilyOverviewObject(): object[] {
    return null;
  }
}
