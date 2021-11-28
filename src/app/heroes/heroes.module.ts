import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, MaterialModule],
})
export class HeroesModule {}
