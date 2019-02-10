import { Injectable } from '@angular/core';
import { Product } from '../model/product';

/**
 * Service for products.
 *
 * @author davinen.s.curoopen
 */
@Injectable()
export class ProductService {

  /**
   * Fetch a list of Product.
   */
  getProducts(): Product {

      return require('src/mock_object/products.json');
    }
}
