import { ThoughtService } from '../thought.service';
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
  modelo: 'modelo3',
  favorito: false
}

constructor(private service: ThoughtService) {}

ngOnInit(): void {
}
larguraPensamento(): string{
  if(this.pensamento.conteudo.length >= 256) {
    return 'pensamento-g'
  }
  return 'pensamento-p'
}
mudarIconeFavorito(): string {
  if(this.pensamento.favorito == false){
    return 'inativo'
  }
  return 'ativo'
}


atualizarFavoritos(){
this.service.mudarFavorito(this.pensamento).subscribe();
}
}
