import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.html',
  styleUrls: ['./add-book.scss']
})
export class AddBookComponents implements OnInit {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      imageUrl: [''],
      category: [''],
      publicationDate: [''],
      price: [''],
      quantity: [''],
      summary: ['']
    });
  }

  onSubmit() {
    console.log(this.bookForm.value); // Replace this with your service call
  }
}
