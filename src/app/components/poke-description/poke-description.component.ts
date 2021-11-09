import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from 'src/app/services/poke-api.service';
@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {

  public pokemon:any = [];
  constructor(
    private routeActive: ActivatedRoute,
    private _pokeAPIService:PokeAPIService
  ) { }

  ngOnInit(): void {
    const id = this.routeActive.snapshot.paramMap.get('id');
    console.log(id);
    this._pokeAPIService.getPokemonDescription(id).subscribe( data =>{
      this.pokemon = data;
    } )
  }


}
