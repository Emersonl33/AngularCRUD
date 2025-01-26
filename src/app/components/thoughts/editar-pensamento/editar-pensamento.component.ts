import { Component } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent {
  pensamento: Pensamento = {
    id: '0',
    conteudo: '',
    autoria: '',
    modelo: ''

  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(()=>{
      this.router.navigate (['/listarPensamento'])
    })
  }

  cancelCreate(){
      this.router.navigate (['/listarPensamento'])
  }

  constructor (
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento)=> {
      this.pensamento = pensamento
    })
  }
}
