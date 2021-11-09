import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public pokemons:any=[];

  constructor(
   private _pokeApiService:PokeAPIService,
   private _router:Router
  ) { }

  ngOnInit(): void {
    this.getAllPokemones();
  }

  getAllPokemones(){
    this._pokeApiService.getPokemones( ).subscribe( pokemons => {
      // console.log(pokemons);
      this.pokemons = pokemons;
    } );
  }

  showPoke(pokeUrl:any){
    this._router.navigateByUrl( `pokemons/${pokeUrl}` );
  }

  
}
