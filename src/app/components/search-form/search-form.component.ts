import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchEmitter = new EventEmitter<any>();
  userName:string;
  constructor() { }
  search(){
    this.searchEmitter.emit(this.userName);
  }
  ngOnInit(): void {
  }

}
