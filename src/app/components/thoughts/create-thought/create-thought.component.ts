import { Component } from '@angular/core';
import { Pensamento } from './../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.scss']
})
export class CreateThoughtComponent {

  formulario!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ){ }
    ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        conteudo: ['Olá, esse é o primeiro formulário reativo'],
        autoria: ['EmersonGPT'],
        modelo: ['modelo1']
      })
    }

    criarPensamento() {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }

    cancelCreate(){
      this.router.navigate(['/listarPensamento'])
    }
}
