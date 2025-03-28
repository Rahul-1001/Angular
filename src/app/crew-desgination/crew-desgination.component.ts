import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crew-desgination',
  imports: [],
  templateUrl: './crew-desgination.component.html',
  styleUrl: './crew-desgination.component.css'
})
export class CrewDesginationComponent {
@Input() message:string=""
@Input() token:string=""


@Output() messageEvent=new EventEmitter<string>(); 
sendMessage()
{
  this.messageEvent.emit("Hello from child to parent")
}
}
