import { Component } from '@angular/core';
import { Pensamento } from './../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ){ }
    ngOnInit(): void {
    }

    criarPensamento() {
      this.service.criar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }

    cancelCreate(){
      this.router.navigate(['/listarPensamento'])
    }
}
