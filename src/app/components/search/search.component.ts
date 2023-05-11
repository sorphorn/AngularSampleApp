import { Component, Output, Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  // searchValue: string = 'IPHONE';
  searchValue: string = '';
  enteredSearchValue: string = '';

  changeSearchEventValue(eventData: any){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  @Input() available: number = 0;
  @Input() unavailable: number = 0;

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }


}
