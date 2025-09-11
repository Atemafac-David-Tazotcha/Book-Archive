import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BookService } from '../book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.page.html',
  styleUrls: ['./all-books.page.scss'],
  standalone: false
})
export class AllBooksPage implements OnInit {
  allBooks: any[] = [];

  constructor(
    private navCtrl: NavController,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.allBooks = this.bookService.getAllBooks();
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