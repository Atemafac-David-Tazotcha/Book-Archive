import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookService } from '../book.service';

@Component({
  selector: 'app-latest-books',
  templateUrl: './latest-books.page.html',
  styleUrls: ['./latest-books.page.scss'],
  standalone: false
})
export class LatestBooksPage implements OnInit {
  booksByYear: { [key: string]: any[] } = {};

  constructor(
    private navCtrl: NavController,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.booksByYear = this.bookService.getBooksByYear();
  }

  getSortedYears(): string[] {
    return Object.keys(this.booksByYear).sort((a, b) => b.localeCompare(a));
  }

  goBack() {
    // Use navigateBack instead of navigateForward to maintain proper navigation stack
    this.navCtrl.navigateBack('/home');
  }

  openBookDetail(book: any) {
    this.bookService.setCurrentBook(book);
    this.navCtrl.navigateForward('/book-details', {
      state: { book: book }
    });
  }
}