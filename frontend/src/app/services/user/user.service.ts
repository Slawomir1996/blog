import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { User } from 'src/app/user.dto';
import { UserData } from './userData';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAll(page: number, size: number): Observable<UserData> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(size));

    return this.http.get('/api/users', { params }).pipe(
      map((userData: UserData) => userData),
      catchError(err => throwError(err))
    )
  }

  paginateByName(page: number, size: number, username: string): Observable<UserData> {
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('username', username);
    return this.http.get('/api/users', { params }).pipe(
      map((userData: UserData) => userData),
      catchError(err => throwError(err)),

    )
  }


}
