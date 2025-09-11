import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllBooksPageRoutingModule } from './all-books-routing.module';

import { AllBooksPage } from './all-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllBooksPageRoutingModule
  ],
  declarations: [AllBooksPage]
})
export class AllBooksPageModule {}
