import { Component } from '@angular/core';
import { Pensamento } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent {

  formulario!: FormGroup;

  pensamento: Pensamento = {
    id: '0',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false

  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
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
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ){ }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
      })
    })
  }
}
