import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

  constructor(){ }
    ngOnInit(): void {
    }

    criarPensamento() {
      alert("novo pensamento criado")
    }

    cancelCreate(){
      alert("Pensamento cancelado com sucesso")
    }
}
