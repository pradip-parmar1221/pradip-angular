import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://your-backend-api-url.com/users'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  addUser(userData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}