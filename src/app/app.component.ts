import { Item } from './interfaces/iItem';
import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  itemParaSerEditado! : Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void{
    this.listaDeCompra = this.listaService.getListaDeCompra()|| [];
    console.log(this.listaDeCompra);
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }

  // deletarItem(id: number){
  //   console.log(typeof id);
  //   const index = this.listaDeCompra.findIndex((item => 
  //     item.id === id
  //   ));
  //   if (index !== -1){
  //     this.listaDeCompra.splice(index, 1);
  //   }
  // }

  deletarItem(event: any){
    console.log("Tipo de evento recebido:", typeof event, event);
    this.deletarItem(event);
  }

  limparLista(){
    this.listaDeCompra = [];
  }

  ngDoCheck(): void {
      console.log('Docheck foi chamado')
      this.listaService.atualizarLocalStorage();
  }
}
