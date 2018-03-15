import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome: 'Luis Claudio', cidade: 'Teresina', estado: 'Piaui',
      status: 'ATIVO'},
      {nome: 'Marina da Silva', cidade: 'São José dos Campos', estado: 'São Paulo',
      status: 'INATIVA'},
  ];

}
