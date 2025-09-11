import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { BookService } from '../book.service';
import { ToastController } from '@ionic/angular';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  searchVisible = false;
  selectedSegment = 'booksForU';

  // High School Books
  highSchoolBooks = [
    {
      title: 'Modern Approach',
      author: 'Mysiko Enorgene Ivo',
      image: 'assets/images/h1.webp',
      publicationDate: '2019-09-20',
      pricePerCarton: 180000,
      quantity: 100,
      bookInfo: 'This is a physics book for upper classes.',
      classLevel: 'high-school'
    },
    {
      title: 'Advance level Chemistry',
      author: 'Nguila Emmanuel',
      image: 'assets/images/h2.webp',
      publicationDate: '2020-05-10',
      pricePerCarton: 160000,
      quantity: 120,
      bookInfo: 'Advanced Chemistry concepts explained.',
      classLevel: 'high-school'
    },
    {
      title: 'Biological Science',
      author: 'Tapong Silvester',
      image: 'assets/images/h3.webp',
      publicationDate: '2021-02-15',
      pricePerCarton: 150000,
      quantity: 80,
      bookInfo: 'Covers core Biology topics for students.',
      classLevel: 'high-school'
    },
  ];

  // First Cycle Books
  firstcyclebooks = [
    {
      title: 'Ordinary Level Physics',
      author: 'Mysiko Enorgene Ivo',
      image: 'assets/images/f2.webp',
      publicationDate: '2020-08-12',
      pricePerCarton: 120000,
      quantity: 90,
      bookInfo: 'Beginner Physics for O-Level students.',
      classLevel: 'first-cycle'
    },
    {
      title: 'Ordinary Level Chemistry',
      author: 'Nguila Emmanuel',
      image: 'assets/images/f1.webp',
      publicationDate: '2019-11-05',
      pricePerCarton: 115000,
      quantity: 110,
      bookInfo: 'Introductory Chemistry for O-Level.',
      classLevel: 'first-cycle'
    },
    {
      title: 'Ordinary Level Biology',
      author: 'Tapong Silvester',
      image: 'assets/images/f3.webp',
      publicationDate: '2021-03-18',
      pricePerCarton: 125000,
      quantity: 85,
      bookInfo: 'Introductory Biology for O-Level.',
      classLevel: 'first-cycle'
    }
  ];

  // Primary School Books
  primaryschoolbooks = [
    {
      title: 'Primary Mathematics',
      author: 'Primary Math Author',
      image: 'assets/images/p1.webp',
      publicationDate: '2022-01-10',
      pricePerCarton: 80000,
      quantity: 150,
      bookInfo: 'Basic Math concepts for primary pupils.',
      classLevel: 'primary'
    },
    {
      title: 'Basic Science',
      author: 'Science Author',
      image: 'assets/images/p2.webp',
      publicationDate: '2021-07-22',
      pricePerCarton: 85000,
      quantity: 130,
      bookInfo: 'Intro to general science for kids.',
      classLevel: 'primary'
    },
    {
      title: 'English for Kids',
      author: 'English Author',
      image: 'assets/images/p3.webp',
      publicationDate: '2022-02-14',
      pricePerCarton: 75000,
      quantity: 170,
      bookInfo: 'Fun English learning for children.',
      classLevel: 'primary'
    }
  ];

  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private bookService: BookService,
    private toastCtrl: ToastController
  ) {
    console.log('HomePage constructor called');
    
    // Listen for navigation events to reset segment when returning to home
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/home' || event.url === '/') {
          // Reset to booksForU segment when returning to home
          this.selectedSegment = 'booksForU';
        }
      });
  }

  ngOnInit() {
    console.log('HomePage initialized');
  }

  toggleSearch() {
    this.searchVisible = !this.searchVisible;
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    
    if (this.selectedSegment === 'all') {
      this.navCtrl.navigateForward('/all-books');
    } else if (this.selectedSegment === 'latest') {
      this.navCtrl.navigateForward('/latest-books');
    }
    // 'booksForU' stays on home page
  }

  goToAddBookPage() {
    this.navCtrl.navigateForward('/add-book');
  }

  openBookDetail(book: any) {
    console.log('Opening book details for:', book.title);
    
    // Use Ionic navigation with state
    this.navCtrl.navigateForward('/book-details', {
      state: {
        book: book
      }
    }).then((success) => {
      console.log('Navigation result:', success);
      if (!success) {
        this.showNavigationError();
      }
    }).catch((error) => {
      console.error('Navigation error:', error);
      this.showNavigationError();
    });
  }

  private async showNavigationError() {
    const toast = await this.toastCtrl.create({
      message: 'Cannot navigate to book details.',
      duration: 4000,
      color: 'danger',
      position: 'top'
    });
    await toast.present();
  }
}