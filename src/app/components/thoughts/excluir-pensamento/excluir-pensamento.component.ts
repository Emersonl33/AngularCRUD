import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id){
    this.service.excluir(this.pensamento.id).subscribe(() =>{
      this.router.navigate(['/listarPensamento'])
    })
  }
  }

  cancelar () {
    this.router.navigate(['/listarPensamento'])
  }

}
