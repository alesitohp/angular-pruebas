import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzservice } from '../services/dbz.service';

@Component({

  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class dbzComponent {

  constructor(private dbzservice:dbzservice){}

  get characters():Character[]{
    return [...this.dbzservice.characters];
  }

  onDeleteCharacter(id: string):void{
    this.dbzservice.deleteCharacterById(id);
  }

  onCreateCharacter(character:Character):void{
    this.dbzservice.onNewCharacter(character);
  }



}
