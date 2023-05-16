import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  logged: any = false;
  genres: any = [];
  pcGames: any;
  browserGames: any;
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private getDataService: GetDataService
  ) {}
  // ngOnInit(): void {
  //   this._auth.userData.subscribe(() => {
  //     if (this._auth.userData.getValue()) {
  //       this.logged = true;
  //     } else {
  //       this.logged = false;
  //     }
  //   });
  //   this.setGenres()
  //   console.log(this.pcGames);

  // }
  logOut() {
    localStorage.removeItem('jwt');
    this._auth.userData.next(null);
    this._router.navigateByUrl('/');
  }
  ngOnInit(): void {
    this._auth.userData.subscribe(() => {
      if (this._auth.userData.getValue()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
    this.setGenres().then(() => {
      console.log(this.pcGames);
    });
  }
  
  getGanreByPlatform(platform: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getDataService.getGameByPlatform(platform).subscribe((res: []) => {
        const genres = res.map(g => g['genre']);
        const uniqueGenres = [...new Set(genres)];
        resolve(uniqueGenres);
      }, error => {
        reject(error);
      });
    });
  }
  
  async setGenres(): Promise<void> {
    this.pcGames = await this.getGanreByPlatform('pc');
    this.browserGames = await this.getGanreByPlatform('browser');
  }}
