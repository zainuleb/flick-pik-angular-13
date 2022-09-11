import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {APIData} from '../interfaces/photos.interface';
@Injectable({
  providedIn: 'root',
})
export class SearchPageService {
  constructor(private http: HttpClient) {}

  // Get Photos from Flickr API
  getPhotos(query: string): Observable<APIData> {
    return this.http.get<APIData>(
      `${environment.API_URL}&tags=${query}&per_page=10&format=json&nojsoncallback=1`
    );
  }
}
