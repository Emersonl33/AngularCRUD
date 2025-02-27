import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from './thought';


@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]> {

    const itensPorPagina = 6;

    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }

    if(favoritos){
      params = params.set("favoritos", true)
    }
    //return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`)

    return this.http.get<Pensamento[]>(this.API, {params : params})


  }



  /*listarPensamentosFavoritos(pagina: number, filtro: string): Observable<Pensamento[]> {
    const itensPorPagina = 6;

    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)
    .set("favorito", true)

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }

    return this.http.get<Pensamento[]>(this.API, {params : params})
  }*/


  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: String): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: String): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
