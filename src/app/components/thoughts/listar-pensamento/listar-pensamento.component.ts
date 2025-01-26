
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

  constructor(private service: ThoughtService) {

  }

  ngOnInit(): void {

    this.service.listar().subscribe((ListaPensamentos) => {
      this.ListaPensamentos = ListaPensamentos
    })
  }
}
