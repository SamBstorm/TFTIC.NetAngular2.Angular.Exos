import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRandomUser } from '../models/irandom-user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  private _url: string = "https://randomuser.me/api";

  constructor(private _http: HttpClient) { }

  public getOne(): Observable<IRandomUser> {
    return this._http.get<any>(this._url)
      .pipe(
        map(result => {
          return {
            firstname: result.results[0].name.first,
            lastname: result.results[0].name.last,
            username: result.results[0].login.username,
            email: result.results[0].email,
            birthdate: result.results[0].dob.date,
            picture_url: result.results[0].picture.large
          };
        }));
  }
/**
 * Attention, cette fonction ne fonctionne pas car l'API n'a pas de comportement POST 'publique', cette fonction n'est là qu'à titre d'exemple.
 * @param data Utilisateur à enregistrer
 * @returns identifiant numérique de l'utilisateur (observable)
 */
  public insert(data: IRandomUser): Observable<number> {
    let content = {
      name: {
        first: data.firstname,
        last: data.lastname
      },
      email: data.email,
      login: { username: data.username },
      dob: { date: data.birthdate },
      picture: { large: data.picture_url }
    };
    return this._http.post<number>(this._url, content);
  }
}
