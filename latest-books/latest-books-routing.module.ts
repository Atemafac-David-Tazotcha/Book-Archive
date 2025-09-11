import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestBooksPage } from './latest-books.page';

const routes: Routes = [
  {
    path: '',
    component: LatestBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestBooksPageRoutingModule {}
