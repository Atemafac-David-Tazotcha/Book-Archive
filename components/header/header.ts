import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
standalone: true,
  imports: [CommonModule],
 templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  selected = 'books';

  @Output() tabChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  select(tab: string) {
    this.selected = tab;
    this.tabChange.emit(tab);
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
