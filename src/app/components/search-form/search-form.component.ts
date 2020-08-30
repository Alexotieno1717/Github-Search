import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  userName:string;
  @Output() searchEmitter = new EventEmitter<any>();

 
  constructor() { }
  
  ngOnInit(): void {
    
  }
  search(){
    this.searchEmitter.emit(this.userName);
    this.userName='';
  }

}
