import { Item } from './interfaces/iItem';
import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  itemParaSerEditado! : Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void{
    this.listaDeCompra = this.listaService.getListaDeCompra();
    console.log(this.listaDeCompra);
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }
}
