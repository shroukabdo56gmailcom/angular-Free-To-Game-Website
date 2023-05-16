import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // isLoggedIn=new BehaviorSubject(false);
  userData: any = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    if (localStorage.getItem('jwt')) {
      // this.isLoggedIn.next(true);
      this.saveData();
    } 
  }

  saveData() {
    let en = localStorage.getItem('jwt');
    let dec: any = jwtDecode(en || '');
    this.userData.next(dec);
  }
  register(data: any): Observable<any> {
    return this.http.post('https://sticky-note-fe.vercel.app/signup', data);
  }
  login(data: any): Observable<any> {
    return this.http.post('https://sticky-note-fe.vercel.app/signin', data);
  }
}
