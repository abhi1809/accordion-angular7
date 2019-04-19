import { Component } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  public panelOneOpen = false;
  public panelTwoOpen = false;
  public panelThreeOpen = false;

  constructor(){}
}
