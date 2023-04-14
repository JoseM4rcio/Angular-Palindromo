import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {

  numero: number | null = null;
  resultado: string | null = null;

  verificar() {
    if (this.numero !== null) {
      const numeroString = this.numero.toString();
      const numeroReverso = numeroString.split('').reverse().join('');
      this.resultado = numeroString === numeroReverso ? 'Sim' : 'Não';
    }
  }
}
