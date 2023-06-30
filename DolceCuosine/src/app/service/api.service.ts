import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApiMoto = 'http://localhost:8003/moto';
  private urlApiCarro = 'http://localhost:8002/carro';
  private urlApiUser  = 'http://localhost:8001/usuario'; 
  private urlApiDelivery  = 'http://localhost:8005/delivery'; 

  constructor(private http: HttpClient) {}

  public getDataMoto(): Observable<any> {
    return this.http.get<any>(this.urlApiMoto)
  }
  public guardarMoto(moto: any): Observable<any> {
    return this.http.post<any>(this.urlApiMoto, moto);
  }

  
  public getDataCarro(): Observable<any> {
    return this.http.get<any>(this.urlApiCarro)
  }

  
  
  public getDataUser(): Observable<any> {
    return this.http.get<any>(this.urlApiUser)
  }

  

  public getDataDelivery(): Observable<any> {
    return this.http.get<any>(this.urlApiDelivery)
  }
  public guardarDelivery(delivery: any): Observable<any> {
    return this.http.post<any>(this.urlApiDelivery, delivery);
  }

  public eliminarDelivery(id: number): Observable<any> {
    const url = `${this.urlApiDelivery}/${id}`;
    return this.http.delete(url);
  }


}
