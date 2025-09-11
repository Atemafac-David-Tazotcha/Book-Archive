import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
  standalone: false
})
export class AddBookPage implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      image: [''],
      classLevel: ['', Validators.required],
      publicationDate: [''],
      pricePerCarton: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      bookInfo: ['']
    });
  }

  ngOnInit() {}

  async addBook() {
    if (this.bookForm.valid) {
      const newBook = this.bookForm.value;
      
      // Here you would typically save to a database
      // For now, we'll just navigate back and show success message
      
      const toast = await this.toastCtrl.create({
        message: `"${newBook.title}" added to ${this.getCategoryName(newBook.classLevel)}!`,
        duration: 3000,
        color: 'success'
      });
      await toast.present();

      // Navigate back to home
      this.navCtrl.navigateBack('/home');
    }
  }

  private getCategoryName(category: string): string {
    switch(category) {
      case 'high-school': return 'High School';
      case 'first-cycle': return 'First Cycle';
      case 'primary': return 'Primary School';
      default: return category;
    }
  }
}