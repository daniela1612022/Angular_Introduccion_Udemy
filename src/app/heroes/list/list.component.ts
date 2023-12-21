import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames : string[] = ['Spiderman' , 'Iron Man' , 'Hulk' , 'Capitan America' , 'Thor' , 'Dr Strange'];
  public deletedHero? : string ;

  // Metodo para borrar ultimo elemento del array
  removeLastHero():void{
    this.deletedHero = this.heroesNames.pop();
  }
}
