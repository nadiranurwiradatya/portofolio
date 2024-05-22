import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';

@NgModule({
  declarations: [DocumentationComponent],
  imports: [CommonModule],
  exports: [DocumentationComponent],
})
export class DocumentationModule {}
