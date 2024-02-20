import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumadorPipe } from './pipes/sumador.pipe';



@NgModule({
  declarations: [
    SumadorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [SumadorPipe]
})
export class SharedModule { }
