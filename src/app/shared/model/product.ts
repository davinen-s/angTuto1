/**
 * Model representing a Product.
 *
 * @author davinen.s.curoopen
 */
export interface Product {

    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
