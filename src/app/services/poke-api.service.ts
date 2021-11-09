import { Injectable } from '@angular/core';
import { pokeAPI } from 'src/environments/pokeapi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    private _http:HttpClient
  ) { }

  getPokemones(){
    return this._http.get(`${pokeAPI.url}/pokemon`);
  }

  getPokemonDescription(id:any){
    return this._http.get( `${pokeAPI.url}/pokemon/${id}` );
  }
}
