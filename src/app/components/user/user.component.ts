import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../../services/git-search.service';
import { User } from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  constructor(public gitSearchService:GitSearchService) { }

  getUsers(userName){ 
    this.gitSearchService.getUsers(userName).then(
      (success)=>{
        this.user= this.gitSearchService.user;
      },
      (error)=>{
        console.log(error);
      }
    )

  }



  ngOnInit(): void {
    this.getUsers("Alexotieno1717");
  }

}
