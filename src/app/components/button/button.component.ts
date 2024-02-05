import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      (click)="handleClick()"
      class="py-3 px-6 bg-blue-600 text-white self-start rounded-md hover:bg-blue-700 transition"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() text = '';
  @Input() handleClick: () => void = () => {};
}
