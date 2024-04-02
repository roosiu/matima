import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fancyNumber',
  standalone: true,
})
export class FancyNumberPipe implements PipeTransform {
  transform(value: string): string | null {
    const match = value.match(/(\d+)/);
    if (!match) {
      return value;
    }
    const number = parseInt(match[0], 10);

    if (isNaN(number)) {
      return value;
    }

    const shadow = Math.random() < 0.5 ? 0 : 1;
    const shadowClass = shadow ? 'fancy-shadow' : 'fancy-shadow-2';
    return value.replace(
      match[0],
      `&nbsp;<span class="fancy-stroke fancy-number fancy-color-${
        Math.floor(Math.random() * 6) + 1
      } ${shadowClass}">${number}</span>`
    );
  }
}
