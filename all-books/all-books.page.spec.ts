import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllBooksPage } from './all-books.page';

describe('AllBooksPage', () => {
  let component: AllBooksPage;
  let fixture: ComponentFixture<AllBooksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
