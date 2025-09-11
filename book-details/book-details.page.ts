import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
  standalone: false
})
export class BookDetailsPage implements OnInit {
  book: any;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController,
    private bookService: BookService
  ) {}

  ngOnInit() {
    console.log('BookDetailsPage initialized');
    
    // Get book data from navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['book']) {
      this.book = navigation.extras.state['book'];
      console.log('Book loaded from navigation state:', this.book.title);
    } else {
      console.error('No book data found in navigation state');
      
      // Fallback: try to get from service
      this.book = this.bookService.getCurrentBook();
      if (this.book) {
        console.log('Book loaded from service:', this.book.title);
      } else {
        console.error('No book data found anywhere');
        this.showErrorToast();
        this.navCtrl.navigateBack('/home');
      }
    }
  }

  async showErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'Book data not available. Please try again.',
      duration: 3000,
      color: 'danger'
    });
    await toast.present();
  }

  getCategoryName(category: string): string {
    switch(category) {
      case 'high-school': return 'High School';
      case 'first-cycle': return 'First Cycle';
      case 'primary': return 'Primary School';
      default: return category;
    }
  }

  async editBook() {
    const toast = await this.toastCtrl.create({
      message: 'Edit book functionality coming soon!',
      duration: 2000,
      color: 'info'
    });
    await toast.present();
  }

  async addToFavorites() {
    const toast = await this.toastCtrl.create({
      message: 'Book added to favorites!',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

  async addToStore() {
    const toast = await this.toastCtrl.create({
      message: 'Book added to store!',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

  async deleteBook() {
    const toast = await this.toastCtrl.create({
      message: 'Book deleted successfully!',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
    
    this.navCtrl.navigateBack('/home');
  }
}