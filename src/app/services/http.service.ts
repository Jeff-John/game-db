import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search?: string)
  // :Observable<APIResponse<Game>>
  {
    let params: HttpParams = new HttpParams()

    if (search)
      params = new HttpParams().set("ordering", ordering).set("search", search);
    else
      params = new HttpParams().set("ordering", ordering);

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params
    });
  }
}

// 2a3493cd819b490a81660843008f542c
