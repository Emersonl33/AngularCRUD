import { Pensamento } from './../thought';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss']
})
export class ThoughtComponent {

@Input() pensamento: Pensamento = {
  id: '',
  conteudo: 'I love angular',
  autoria: 'Emerson',
  modelo: 'modelo3'
}

constructor() {

}
ngOnInit(): void {
}
larguraPensamento(): string{
  if(this.pensamento.conteudo.length >= 256) {
    return 'pensamento-g'
  }
  return 'pensamento-p'
}
}
