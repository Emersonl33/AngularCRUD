import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss']
})
export class ThoughtComponent {

@Input() pensamento = {
  conteudo: 'Ola Angular',
  autoria: 'Emerson',
  modelo: 'modelo3'
}
}
