import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-latest-parent',
  templateUrl: './latest-parent.component.html',
  styleUrl: './latest-parent.component.css',
})
export class LatestParentComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  items = Array(9)
    .fill(0)
    .map((_, i) => i);

  scrollLeft() {
    console.log(this.scrollContainer.nativeElement.scrollWidth);
    this.scrollContainer.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    console.log(this.scrollContainer.nativeElement.scrollWidth);
    this.scrollContainer.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  }
}
