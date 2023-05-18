import { Component, Output, Input, EventEmitter, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements DoCheck, AfterContentInit, AfterContentChecked {
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


  constructor(){
    console.log('Constructor called!')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')
  }
  ngDoCheck(): void {
    console.log('OnCheck called!')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChange called!')
    console.log(changes)
  }
  

  ngOnInit(): void {
    console.log('Oninit called')
  }

  

  




}
