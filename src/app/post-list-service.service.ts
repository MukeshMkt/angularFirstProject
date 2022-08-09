import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { postList } from '../interface/postList';

@Injectable({
  providedIn: 'root',
})
export class PostListServiceService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private apiData: HttpClient) {}
  getData(): Observable<postList[]> {
    const value = this.apiData.get<postList[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.log('error caught in service');
        console.error(err);
        throw err;
      })
    );
    return value;
  }
}
