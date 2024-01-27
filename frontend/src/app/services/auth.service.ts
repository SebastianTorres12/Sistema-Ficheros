import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8000/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  private user: any = null;
  private readonly ORGANISMO_ID_KEY = 'organismoId';

  constructor(private http: HttpClient) {}

  login(nombre: string, password: string, role: string): Observable<any> {
    
    const body = { nombre, password };
    const loginUrl = `${this.apiUrl}/${role}/login`;

    return this.http.post<any>(loginUrl, body).pipe(
      tap(user => {
        console.log('User:', user); // Agrega esta línea para imprimir en la consola
        this.user = user;

        if (user?.organismoId) {
          localStorage.setItem(this.ORGANISMO_ID_KEY, user.organismoId);
        }
      }),
      catchError(this.handleError)
    );
  }

    // Método para obtener el token y el ID del organismo
    getTokenAndOrganismoId(): { token: string, id: string } {
      const organismoId = localStorage.getItem(this.ORGANISMO_ID_KEY);
      // Ajusta esto según la estructura real de tu usuario y la lógica de autenticación
      const result = {
        token: this.user?.token || '',
        id: organismoId || ''
      };
      console.log(result); // Añade este console.log para verificar el valor
      return result;
    }
    

  private handleError(error: HttpErrorResponse) {
    let errorMsg: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } else {
      errorMsg = `Error code: ${error.status}. Message: ${error.message}`;
    }
    return throwError(() => errorMsg);
  }
}
