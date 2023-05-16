import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  game:any;
  games: any[]=[];
  id:any;
constructor(private _data:GetDataService,private activeRouts: ActivatedRoute){
  let {id}=activeRouts.snapshot.params
 this.id=id
}
red:string='red';
ngOnInit(): void {
  this._data.getGameById(this.id).subscribe(async(res)=>{
    this.game=await res
  })
  this._data.getAllGames().subscribe(
   async (response) => {
      this.games = await response;
    })
console.log(this.games);

}
}
