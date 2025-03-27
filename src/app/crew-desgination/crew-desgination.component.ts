import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crew-desgination',
  imports: [],
  templateUrl: './crew-desgination.component.html',
  styleUrl: './crew-desgination.component.css'
})
export class CrewDesginationComponent {
@Input() message:string=""
}
