import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product';
import {ProductService} from '../shared/service/product.servics';

/**
 * Component allowing user to view all products and perform search via a filter.
 *
 * @author davinen.s.curoopen
 */
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /** The page's title. */
  pageTitle = 'Product List View';

  /**  List of products. */
  products: Product[];

  /** The product list(#products) filtered by the #listFilter. */
  filteredProduct: Product[];

  /** Width of the product image displayed in the result table in px. */
  imageWidth = 50;

  /** Margin of the product image displayed. */
  imageMargin = 2;

  /** Flag denoting whether to show the image in the result table. */
  showImage = false;

  /** The filter text entered by the user. */
  private pListFilter: string;

  errorMessage: string;

  /**
   * Class constructor.
   * @param productService Product service.
   */
  constructor( private productService: ProductService) {
  }

  /** Component initialization and good place to retrieve data. */
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      retrievedProducts => {
        this.products = retrievedProducts;
        this.filteredProduct  = this.products;
      },
        error => this.errorMessage = error as any
    );
  }

  /**
   * Getter method for listFilter.
   */
  get listFilter(): string {
    return this.pListFilter;
  }

  /**
   * Setter method for listFilter. Also trigger filtering if listFilter is not blank.
   */
  set listFilter(value: string) {
    this.pListFilter = value;
    this.filteredProduct = this.pListFilter ? this.performFilter(this.pListFilter) : this.products;

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
