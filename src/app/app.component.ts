import { Component } from '@angular/core';

// Archivo principal del componente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title : string = 'Mi primera app de Angular';
}
