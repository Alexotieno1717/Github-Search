import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../../services/git-search.service';
import { User } from '../../user';
import { Repo } from 'src/app/repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo:Repo;
  constructor(public gitSearchService:GitSearchService) { }

  getRepo(userName){ 
    this.gitSearchService.getRepo(userName).then(
      (success)=>{
        this.repo= this.gitSearchService.repo;
      },
      (error)=>{
        console.log(error);
      }
    )

  }

  ngOnInit(): void {
    this.getRepo("Alexotieno1717");
  }

}
