import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, SidebarModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
