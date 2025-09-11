import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LatestBooksPage } from './latest-books.page';

describe('LatestBooksPage', () => {
  let component: LatestBooksPage;
  let fixture: ComponentFixture<LatestBooksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
