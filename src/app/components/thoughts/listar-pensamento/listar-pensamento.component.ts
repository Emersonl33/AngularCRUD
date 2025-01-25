import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent {
  ListarPensamentos = [
    {
      conteudo: 'Passo infos para o componente filho',
      autoria: 'Comp pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Comp filho',
      modelo: 'modelo2'
    }
  ];

}
