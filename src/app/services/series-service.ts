import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private oHttpClient: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.oHttpClient.get<any[]>('https://api.tvmaze.com/shows');
  }
}