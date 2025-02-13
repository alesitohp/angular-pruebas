import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterlist:Character[]=[{
    id:uuid(),
    name:'Trunks',
    power:10,

  }]


  @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();
    public onejemplo1: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id: string):void{
    this.onDelete.emit(id)
  }

  ejemplo1(nombre: string):void{
    this.onejemplo1.emit(nombre)
  }

}
