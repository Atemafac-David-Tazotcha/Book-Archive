import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private currentBook: any = null;

  // All books combined
  private allBooks = [
    // High School Books
    {
      title: 'Modern Approach',
      author: 'Mysiko Enorgene Ivo',
      image: 'assets/images/h1.webp',
      publicationDate: '2019-09-20',
      pricePerCarton: 180000,
      quantity: 100,
      bookInfo: 'This is a physics book for upper classes.',
      classLevel: 'high-school',
      category: 'High School'
    },
    {
      title: 'Advance level Chemistry',
      author: 'Nguila Emmanuel',
      image: 'assets/images/h2.webp',
      publicationDate: '2020-05-10',
      pricePerCarton: 160000,
      quantity: 120,
      bookInfo: 'Advanced Chemistry concepts explained.',
      classLevel: 'high-school',
      category: 'High School'
    },
    {
      title: 'Biological Science',
      author: 'Tapong Silvester',
      image: 'assets/images/h3.webp',
      publicationDate: '2021-02-15',
      pricePerCarton: 150000,
      quantity: 80,
      bookInfo: 'Covers core Biology topics for students.',
      classLevel: 'high-school',
      category: 'High School'
    },

    // First Cycle Books
    {
      title: 'Ordinary Level Physics',
      author: 'Mysiko Enorgene Ivo',
      image: 'assets/images/f2.webp',
      publicationDate: '2020-08-12',
      pricePerCarton: 120000,
      quantity: 90,
      bookInfo: 'Beginner Physics for O-Level students.',
      classLevel: 'first-cycle',
      category: 'First Cycle'
    },
    {
      title: 'Ordinary Level Chemistry',
      author: 'Nguila Emmanuel',
      image: 'assets/images/f1.webp',
      publicationDate: '2019-11-05',
      pricePerCarton: 115000,
      quantity: 110,
      bookInfo: 'Introductory Chemistry for O-Level.',
      classLevel: 'first-cycle',
      category: 'First Cycle'
    },
    {
      title: 'Ordinary Level Biology',
      author: 'Tapong Silvester',
      image: 'assets/images/f3.webp',
      publicationDate: '2021-03-18',
      pricePerCarton: 125000,
      quantity: 85,
      bookInfo: 'Introductory Biology for O-Level.',
      classLevel: 'first-cycle',
      category: 'First Cycle'
    },

    // Primary School Books
    {
      title: 'Primary Mathematics',
      author: 'Primary Math Author',
      image: 'assets/images/p1.webp',
      publicationDate: '2022-01-10',
      pricePerCarton: 80000,
      quantity: 150,
      bookInfo: 'Basic Math concepts for primary pupils.',
      classLevel: 'primary',
      category: 'Primary School'
    },
    {
      title: 'Basic Science',
      author: 'Science Author',
      image: 'assets/images/p2.webp',
      publicationDate: '2021-07-22',
      pricePerCarton: 85000,
      quantity: 130,
      bookInfo: 'Intro to general science for kids.',
      classLevel: 'primary',
      category: 'Primary School'
    },
    {
      title: 'English for Kids',
      author: 'English Author',
      image: 'assets/images/p3.webp',
      publicationDate: '2022-02-14',
      pricePerCarton: 75000,
      quantity: 170,
      bookInfo: 'Fun English learning for children.',
      classLevel: 'primary',
      category: 'Primary School'
    }
  ];

  setCurrentBook(book: any) {
    this.currentBook = book;
    console.log('Book stored in service:', book?.title);
  }

  getCurrentBook() {
    console.log('Book retrieved from service:', this.currentBook?.title);
    return this.currentBook;
  }

  clearCurrentBook() {
    this.currentBook = null;
  }

  // New methods
  getAllBooks() {
    return this.allBooks;
  }

  getBooksByYear() {
    const booksByYear: { [key: string]: any[] } = {};
    
    this.allBooks.forEach(book => {
      const year = new Date(book.publicationDate).getFullYear().toString();
      if (!booksByYear[year]) {
        booksByYear[year] = [];
      }
      booksByYear[year].push(book);
    });
    
    return booksByYear;
  }

  getLatestBooks() {
    // Sort by publication date descending and get recent books
    return this.allBooks
      .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
      .slice(0, 12); // Get latest 12 books
  }
}