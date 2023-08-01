import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bannner',
  templateUrl: './bannner.component.html',
  styleUrls: ['./bannner.component.scss'],
})
export class BannnerComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
