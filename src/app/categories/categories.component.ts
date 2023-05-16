import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  gamesData: any[] = [];
  genres: string[] = ['Action', 'Adventure', 'Arcade', 'Puzzle', 'RPG', 'Simulation', 'Sports', 'Strategy'];
  genre: string ;
  platform:string='pc';
  sortType:string='popularity';
  constructor(private _data:GetDataService,private route: ActivatedRoute){
let {cat}=route.snapshot.params
this.genre=cat
}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.genre = params['cat'];
    // this._data.getByCategory(this.category).subscribe(async (res) => {
    //   this.gamesData = await res;
    // });
    this.filterGames()
  });
}
filterGames(): void {
  console.log('filtered');
  
  this._data.getFilteredGames(this.genre,this.platform,this.sortType).subscribe(async (res) => {
    this.gamesData = await res;
  });
}}
