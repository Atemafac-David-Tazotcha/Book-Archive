import { Component , Input} from '@angular/core';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports:[CommonModule],
templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {
 @Input() book!: Book;
}
















