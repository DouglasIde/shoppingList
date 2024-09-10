import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoItemParaExcluir = new EventEmitter<Number>();


  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem(){
    if(this.item.comprado === true){
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  deletarItem() {
    const itemId = Number(this.item.id);
    if (!isNaN(itemId)) {
      this.emitindoItemParaExcluir.emit(itemId);  // Certifique-se que está emitindo um número aqui
    } else {
      console.error("ID inválido:", this.item.id);
    }
  }
  

  ngOnDestroy(){
    console.log("Conseguiram me calar!!");
  }
}
