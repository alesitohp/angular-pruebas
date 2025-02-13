import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations:[
      dbzComponent,
      ListComponent,
      AddCharacterComponent,
    ],
    exports:[
      dbzComponent,
    ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class DbzModule {


}
