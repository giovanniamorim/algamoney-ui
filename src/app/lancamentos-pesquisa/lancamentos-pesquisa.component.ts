import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent  {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Padaria do José'},
      {tipo: 'RECEITA', descricao: 'impostos', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Ministério da Fazenda'},
      {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Microsoft'},
      {tipo: 'DESPESA', descricao: 'Compra de tomada', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Tem de Tudo'},
      {tipo: 'DESPESA', descricao: 'Compra de camisa', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Sol e mar'},
      {tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Padaria do José'},
      {tipo: 'DESPESA', descricao: 'Compra de lençoo', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Feira do Guará'},
      {tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Padaria do José'},
      {tipo: 'DESPESA', descricao: 'Compra de agulha', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Tem de tudo'},
      {tipo: 'RECEITA', descricao: 'Venda do notebook', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Giovanni'},
      {tipo: 'DESPESA', descricao: 'Compra do mouse', dataVencimento: new Date (2017, 5, 30),
      dataPagamento: new Date (2017, 5, 30), valor: 4.55, pessoa: 'Mega'},
  ];

}
