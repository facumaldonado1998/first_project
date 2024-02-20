import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumador'
})
export class SumadorPipe implements PipeTransform {

  transform(value: number[]): number {
    return value?.reduce(
      (accum, current) => accum + current, 0
      ) || 0;
  }

}
