import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';

/**
 * Component allowing user to view all products and perform search via a filter.
 *
 * @author davinen.s.curoopen
 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /** The page's title. */
  pageTitle = 'Product List View';

  /**  List of products. */
  products: Product[] = require('src/mock_object/products.json');

  /** The product list(#products) filtered by the #listFilter. */
  filteredProduct: Product[];

  /** Width of the product image displayed in the result table in px. */
  imageWidth = 50;

  /** Margin of the product image displayed. */
  imageMargin = 2;

  /** Flag denoting whether to show the image in the result table. */
  showImage = false;

  /** The filter text entered by the user. */
  private _listFilter: string;

  /**
   * Getter method for listFilter.
   */
  get listFilter(): string {
    return this._listFilter;
  }

  /**
   * Setter method for listFilter. Also trigger filtering if listFilter is not blank.
   */
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProduct = this._listFilter ? this.performFilter(this._listFilter) : this.products;

  }

  /**
   * Class constructor.
   */
  constructor() {
    this.filteredProduct  = this.products;
    this.listFilter = 'cart';
   }

  /** Component initialization and good place to retrieve data. */
  ngOnInit() {
  }

  /**
   * Toggle the visibility of images and the text of the toggle button by changing the display flag.
   */
  toggleImageVisibility(): void {
    this.showImage = ! this.showImage;
  }

  /**
   * Filter the #products list by the #listFilter by lowercase comparison.
   *
   * @param filterBy the product by which the list will be filtered.
   */
  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  /**
   * Executes when an event of type #ratingCLicked is throw.
   *
   * @param message the message passed as an event body.
   */
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
