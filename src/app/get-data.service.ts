import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '89e5c2da12msh29278a20630993cp16cdfejsnee182dc3224d',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    });

    return this.http.get(this.apiUrl, { headers });
  }
  getGameByPlatform(platform:any):Observable<any>{
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '89e5c2da12msh29278a20630993cp16cdfejsnee182dc3224d',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    });

    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}`, { headers });

  }
  getGameById(id:any){
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '89e5c2da12msh29278a20630993cp16cdfejsnee182dc3224d',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    });

    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, { headers });

  }
  getByCategory(cat:string):Observable<any>{
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '89e5c2da12msh29278a20630993cp16cdfejsnee182dc3224d',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    });

    return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, { headers });

  }
  // getFilteredGames(category:string,platform:string,sortType:string):Observable<any>{
  //   const headers = new HttpHeaders({
  //     'X-RapidAPI-Key': '89e5c2da12msh29278a20630993cp16cdfejsnee182dc3224d',
  //     'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  //   });

  //   return this.http.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${category}&sort-by=${sortType}`, { headers });
  // }
  getFilteredGames(category: string,platform: string, sortType: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '89e5c2da12msh29278a20630993cp16cdfejsnee182dc3224d',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    });

    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${category}&sort-by=${sortType}`;

    return this.http.get(url, { headers });
  }
}
