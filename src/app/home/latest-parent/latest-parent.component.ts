import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-latest-parent',
  templateUrl: './latest-parent.component.html',
  styleUrl: './latest-parent.component.css',
})
export class LatestParentComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  displayedItems: number[] = [];

  ngOnInit() {
    this.initializeItems();
  }

  ngAfterViewInit() {
    this.scrollToMiddle();
  }

  initializeItems() {
    this.displayedItems = [...this.items, ...this.items, ...this.items];
  }

  scrollToMiddle() {
    const container = this.scrollContainer.nativeElement;
    const middleIndex = Math.floor(this.displayedItems.length / 2);
    const scrollLeft = middleIndex * 240; // Adjust 240 based on your item width
    container.scrollLeft = scrollLeft;
  }

  onScroll() {
    const container = this.scrollContainer.nativeElement;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;

    if (scrollPosition + containerWidth >= scrollWidth - 100) {
      // Near the end, append items to the right
      this.displayedItems = [...this.displayedItems, ...this.items];
    }
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 240,
      behavior: 'smooth',
    });
  }
}
