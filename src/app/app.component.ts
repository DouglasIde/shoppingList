import { Item } from './interfaces/iItem';
import { Component, OnInit } from '@angular/core';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  ListaDeCompra! : Array<Item>

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void{
    this.ListaDeCompra = this.listaService.getListaDeCompra();
    console.log(this.ListaDeCompra);
    
  }
}
