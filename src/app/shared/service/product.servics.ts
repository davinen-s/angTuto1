import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

/**
 * Service for products.
 *
 * @author davinen.s.curoopen
 */
@Injectable({
    providedIn: 'root'
  })
export class ProductService {

  /** Use to access product list. */
  private productUrl = 'mock_object/products.json';

  /**
   * Error handler.
   * @param err the error response received.
   */
  private static handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: $ {err.error.message}';
    } else {
      errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

  /**
   * Class constructor.
   * @param http Helper class to perform HTTP calls.
   */
  constructor(private http: HttpClient) {

  }

  /**
   * Fetch a list of Product.
   */
  getProducts(): Observable<Product[]> {
     // return require('src/mock_object/products.json');
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(ProductService.handleError)
    );
    }



}
