import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from '../model/seriesinterface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private oHttpClient: HttpClient) {}

  getAll(): Observable<Serie[]> {
    return this.oHttpClient.get<Serie[]>('https://api.tvmaze.com/shows');
  }
}