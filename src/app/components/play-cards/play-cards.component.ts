import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-play-cards',
  standalone: true,
  imports: [],
  templateUrl: './play-cards.component.html',
  styleUrl: './play-cards.component.css'
})
export class PlayCardsComponent {

  /*@Input() name: String = "L bo goss 1";
  @Input() hp: number = 40;
  @Input() figureCaption: String = "Num 237 monstre";
  @Input() attackName: String = "Geo attack";
  @Input() attackStrength: number =60;
  @Input() attackDescription: String = "C'est juste une description en vue de mettre en lumière l'attaque. Probablement que chose à avaoir vace l'électricité.";*/
  
  //UTILISATION DES INPUTS #Add Input
  @Input({
    //required: true //pour rendre le input obligatoire
    alias : 'myMonster',
    //propriété pour changer la valeur d'un elt de l'input(model)
    transform:(value: Monster)=>{
      value.hp = value.hp +3;
      return value;
    }
  }) monster:Monster = new Monster();

  //UTILISATION DES INPUTS #Signal Input
  monster2 : InputSignal<Monster> = input(new Monster()
  /*,{
    alias: 'myMonsterr',
    transform: (value:Monster)=>{
      value.hp = value.hp -1;
      return value;
    }
  }*/
);
  //monster2 : InputSignal<Monster> = input.required();
}
