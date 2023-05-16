import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  games: any[] = [];
  titles:string[]=[];
  constructor(private getDataService: GetDataService) {}
  getTitles(){
    this.games.map((game)=>{
      this.titles.push(game.title)
    })
  }
  search(val: string) {
    const value = val.trim().toLowerCase();
    if (value === '') {
      // If the search query is empty, show all games
      this.games = [];
      this.getDataService.getAllGames().subscribe((res) => {
        this.games = res;
      });
    } else {
      // Filter the games based on the search query
      this.games = this.games.filter((game) =>
        game.title.toLowerCase().includes(value)
      );
    }
  }
  ngOnInit(): void {
this.search('')
  }
}
