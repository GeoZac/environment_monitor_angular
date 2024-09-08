import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentalReadingService {

  constructor(private http: HttpClient) {
    this.apiUrl = environment.baseUrl + this.serviceEndpoint;
  }

  apiUrl: string;
  serviceEndpoint: string = '/EnvironmentalReading';

  getAllEnvironmentalReadingsBySensorSystemId(
    sensorSystemId: string,
    pageNo: number = 0,
    pageSize: number = 10,
    sortBy: string = 'id',
    sortDir: string = 'asc',
  ): Observable<any> {
    let params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);

    return this.http.get<any>(`${this.apiUrl}/SensorSystem/${sensorSystemId}`, {
      params: params,
    });
  }
}
