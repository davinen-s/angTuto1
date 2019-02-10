import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

/**
 * Component to display star on a scale of 5 relative to the rating set on the component.
 *
 * @author davinen.s.curoopen
 */
@Component({
    selector: 'app-star',
    template: `
        <div class="crop"
            [style.width.px]= "starWidth"
            [title]= "rating"
            (click)= 'onClick()'>
            <div style="width: 75px">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
        </div>

    `,
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    /** The rating defining how many stars will be displayed. */
    @Input() rating: number;

    /** The width of the div container that will show star reflecting the rating set. */
    starWidth: number;

    /** Output variable that will pass information to the parent element/component in form of event. */
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

    /** Class constructor. */
    constructor() {
    }

    /**
     * Component's OnChange Event hook. calculates the starWidth relative
     * to the rating set on the component.
     */
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating is ${this.rating} was clicked.`);
    }
}
