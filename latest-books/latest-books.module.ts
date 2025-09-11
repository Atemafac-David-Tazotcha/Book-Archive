import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatestBooksPageRoutingModule } from './latest-books-routing.module';

import { LatestBooksPage } from './latest-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatestBooksPageRoutingModule
  ],
  declarations: [LatestBooksPage]
})
export class LatestBooksPageModule {}
