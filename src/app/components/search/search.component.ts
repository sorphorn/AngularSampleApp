import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // searchValue: string = 'IPHONE';
  searchValue: string = '';
  changeSearchEventValue(eventData: any){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  @Input() available: number = 0;
  @Input() unavailable: number = 0;
}
