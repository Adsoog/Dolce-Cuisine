import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApiMoto = 'http://localhost:8003/moto';
  private urlApiCarro = 'http://localhost:8002/carro';
  private urlApiUser = 'http://localhost:8001/usuario';
  private urlApiDelivery = 'http://localhost:8005/delivery';
  private urlApiReview = 'http://localhost:8004/resenas';

  constructor(private http: HttpClient) {}

  public getDataMoto(): Observable<any> {
    return this.http.get<any>(this.urlApiMoto);
  }
  public guardarMoto(moto: any): Observable<any> {
    return this.http.post<any>(this.urlApiMoto, moto);
  }
  public getDataCarro(): Observable<any> {
    return this.http.get<any>(this.urlApiCarro);
  }
  public getDataUser(): Observable<any> {
    return this.http.get<any>(this.urlApiUser);
  }

  // Metodos de delivery
  public getDataDelivery(): Observable<any> {
    return this.http.get<any>(this.urlApiDelivery);
  }
  public guardarDelivery(delivery: any): Observable<any> {
    return this.http.post<any>(this.urlApiDelivery, delivery);
  }
  public eliminarDelivery(id: number): Observable<any> {
    const url = `${this.urlApiDelivery}/${id}`;
    return this.http.delete(url);
  }

  // Metodos de Review
  public getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApiReview);
  }
  public guardarReview(review: any): Observable<any> {
    return this.http.post<any>(this.urlApiReview, review);
  }
  public deleteReview(reviewId: any): Observable<any> {
    const url = `${this.urlApiReview}/${reviewId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        console.error('Error al eliminar el review:', error);
        throw error; // Relanzar el error para que sea manejado en el componente
      })
    );
  }
}
