
import { Pensamento } from '../thought';
import { Component, OnInit  } from '@angular/core';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  ListaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1
  haMaisPensamentos: boolean = true;

  constructor(private service: ThoughtService) {
  }

  ngOnInit(): void {

    this.service.listar(this.paginaAtual).subscribe((ListaPensamentos) => {
      this.ListaPensamentos = ListaPensamentos
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual)
    .subscribe(listaPensamentos => {
      this.ListaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length) {
        this.haMaisPensamentos = false
      }
    })
  }
}
