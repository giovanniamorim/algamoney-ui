import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/03/2018',
      dataPagamento: '31/03/2018', valor: 4.55, pessoa: 'Padaria do José'},
      {tipo: 'RECEITA', descricao: 'impostos', dataVencimento: '30/03/2018',
      dataPagamento: '12/02/2018', valor: 4.55, pessoa: 'Ministério da Fazenda'},
      {tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '30/03/2018',
      dataPagamento: '04/05/2017', valor: 4.55, pessoa: 'Microsoft'},
      {tipo: 'DESPESA', descricao: 'Compra de tomada', dataVencimento: '30/03/2018',
      dataPagamento: '21/03/2017', valor: 4.55, pessoa: 'Tem de Tudo'},
      {tipo: 'DESPESA', descricao: 'Compra de camisa', dataVencimento: '30/03/2018',
      dataPagamento: '15/03/2017', valor: 4.55, pessoa: 'Sol e mar'},
      {tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: '30/03/2018',
      dataPagamento: '31/03/2018', valor: 4.55, pessoa: 'Padaria do José'},
      {tipo: 'DESPESA', descricao: 'Compra de lençoo', dataVencimento: '30/03/2018',
      dataPagamento: '31/03/2018', valor: 4.55, pessoa: 'Feira do Guará'},
      {tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: '30/03/2018',
      dataPagamento: '31/03/2018', valor: 4.55, pessoa: 'Padaria do José'},
      {tipo: 'DESPESA', descricao: 'Compra de agulha', dataVencimento: '30/03/2018',
      dataPagamento: '31/03/2018', valor: 4.55, pessoa: 'Tem de tudo'},
      {tipo: 'RECEITA', descricao: 'Venda do notebook', dataVencimento: '30/03/2018',
      dataPagamento: '31/03/2018', valor: 4.55, pessoa: 'Giovanni'},
      {tipo: 'DESPESA', descricao: 'Compra do mouse', dataVencimento: '30/03/2018',
      dataPagamento: '31/03/2018', valor: 4.55, pessoa: 'Mega'},
  ];
}
