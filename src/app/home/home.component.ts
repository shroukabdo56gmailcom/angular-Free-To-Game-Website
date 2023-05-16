import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: any[]=[];
  logged: any = false;

  constructor(private getDataService: GetDataService, private _auth:AuthService) { }

  ngOnInit(): void {
    this.getDataService.getAllGames().subscribe(
      (response) => {
        this.games = response;
      })
      this._auth.userData.subscribe(() => {
        if (this._auth.userData.getValue()) {
          this.logged = true;
        } else {
          this.logged = false;
        }
      });
    }}
