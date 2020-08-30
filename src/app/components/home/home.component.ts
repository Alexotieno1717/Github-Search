import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../../services/git-search.service';
import { User } from '../../user';
import { Repo } from '../../repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  repo:Repo;
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
    this.gitSearchService.getRepo(userName).then(
      (success)=>{
        this.repo= this.gitSearchService.repo;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  // getRepo(userName){ 
    

  // }

  ngOnInit(): void {
    this.getUsers("Alexotieno1717");
  }

}
