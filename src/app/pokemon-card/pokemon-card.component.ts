import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})


export class PokemonCardComponent{
 @Input()
 'pokemon': string;

 @Input()
 'numero': number;

 @Input()
 'pokemonId': string;

 @Input()
 'pokemonType': string;

 


 pegarImagemPokemon(){
   
   const numeroFormatado = (this.numero);

   return `https://images.pokemontcg.io/xy1/${numeroFormatado}.png`;
 }

//  leadingZero(str: string | number, size= 3): string{
//   let s = String(str);

//   while (s.length < (size || 2)){
//     s = '0' + s;
//   }
//   return s;
//  }
}
