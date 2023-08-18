import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any; //armazenados os valores
  public getAllPokemons: any;

  constructor(private pokeapiService: PokeAPIService) {}
  ngOnInit(): void {
    this.pokeapiService.apiListAllPokemons.subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
      console.log(this.getAllPokemons);
    });
  }
  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase()); //faz a verificação se as primeiras letras são iguais a que vocÊ digitou
    });
    this.getAllPokemons = filter; //vai ser o resultado do filtro e apaga
  }
}
