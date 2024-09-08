import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SensorSystemService {

  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = environment.baseUrl + this.serviceEndpoint;
  }

  apiUrl;
  serviceEndpoint = '/SensorSystem';

  // Create a new SensorSystem
  createSensorSystem(sensorSystem: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, sensorSystem);
  }

  // Get a list of all SensorSystems for an UnconvUser
  getAllSensorSystemsByUnconvUserId(
    unconvUserId: string,
    pageNo: number = 0,
    pageSize: number = 10,
    sortBy: string = 'sensorName',
    sortDir: string = 'asc',
  ): Observable<any> {
    let params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);

    return this.http.get<any>(`${this.apiUrl}/UnconvUser/${unconvUserId}`, {
      params,
    });
  }

  // Get a specific SensorSystem by ID
  getSensorSystemById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  // Update an existing SensorSystem
  updateSensorSystem(id: number, sensorSystem: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, sensorSystem);
  }

  // Delete a SensorSystem by ID
  deleteSensorSystem(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
