import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book} from '../../models/book.model';
import { Header } from '../header/header';
import { BookCard } from '../book-card/book-card';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-book-list',
  standalone: true,
   imports: [CommonModule, BookCard, Header, BottomNav],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})


export class BookList implements OnInit {
  books: Book[] = [
    { title: 'Modern Physics', subtitle: 'Modern Approach to...', category: 'High School', coverUrl: 'assets/images/physics.jpg' },
    { title: 'Chemistry', subtitle: 'A-level Chemistry', category: 'High School', coverUrl: 'assets/images/chemistry.jpg' },
    { title: 'Biology', subtitle: 'Biological Science', category: 'High School', coverUrl: 'assets/images/biology.jpg' },
    { title: 'College Physics', subtitle: 'Ordinary Level Physics', category: 'First Cycle', coverUrl: 'assets/images/college-physics.jpg' },
    { title: 'Biology Form 3', category: 'First Cycle', coverUrl: 'assets/images/biology2.jpg' },
    { title: 'Chemistry Made Easy', category: 'First Cycle', coverUrl: 'assets/images/chemistry2.jpg' },
  ];

  groupedBooks: { category: string, books: Book[] }[] = [];

  ngOnInit(): void {
    this.groupByCategory();
  }

  onTabChange(tab: string) {
    console.log('Tab selected:', tab);
  }

  onSearch(query: string) {
    console.log('Search:', query);
  }

  private groupByCategory() {
    const categories = [...new Set(this.books.map(b => b.category))];
    this.groupedBooks = categories.map(cat => ({
      category: cat!,
      books: this.books.filter(b => b.category === cat)
    }));
  }
}




