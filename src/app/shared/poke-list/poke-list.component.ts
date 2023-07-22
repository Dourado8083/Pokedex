import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  constructor(private pokeapiService: PokeAPIService) {
  
  }
  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe(
      res => console.log(res),
      error => error,
    );
  }

}
