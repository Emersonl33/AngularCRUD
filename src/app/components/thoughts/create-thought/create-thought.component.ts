import { Component } from '@angular/core';
import { Pensamento } from './../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        conteudo: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
        autoria:
          ['',
            Validators.compose
            ([Validators.required,
              Validators.minLength(3)
          ])],
        modelo: ['modelo1'],
        favorito: [false]
      })
    }

    criarPensamento() {
      console.log(this.formulario.get('autoria')?.errors)
      if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
    }

    cancelCreate(){
      this.router.navigate(['/listarPensamento'])
    }

    habilitarBotao(): String{
      if(this, this.formulario.valid) {
        return 'botao'
      } else{
        return 'botao__desabilitado'
      }
    }
}
