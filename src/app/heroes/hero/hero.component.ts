import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name : string = 'Iron Man'
  public age : number = 45 ;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  // Metodo para juntar el nombre y la edad
  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  // Metodos para cambiar edad y nombre
  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 23;
  }
}
