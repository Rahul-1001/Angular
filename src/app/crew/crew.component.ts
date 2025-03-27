import { Component, Input } from '@angular/core';
import { CrewDesginationComponent } from "../crew-desgination/crew-desgination.component";

@Component({
  selector: 'app-crew',
  imports: [CrewDesginationComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.css'
})
export class CrewComponent {
  messageForComponent:string="From Parent comp";

}
