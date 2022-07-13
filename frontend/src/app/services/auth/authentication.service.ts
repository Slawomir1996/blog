import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';



export interface LoginForms{
  email:string;
  password:string

};


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginForms:LoginForms) {
console.log(loginForms);
    return this.http.post<any>('/api/users/login', { email: loginForms.email, password: loginForms.password }).pipe(
      map((token) => {
        console.log(token);
        localStorage.setItem('blog-token', token.access_token);
        return token;
      })
    )

  }

  register(user:any){
    return this.http.post<any>('/api/users/',user).pipe(map(
      user=>user
      
    ))

  }
  logout() {
    // localStorage.removeItem(JWT_NAME);
  }

}
