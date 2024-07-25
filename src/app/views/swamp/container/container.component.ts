import { Component } from '@angular/core';
import { SelectorComponent } from '../selector/selector.component';

const components=[SelectorComponent]

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [components],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
