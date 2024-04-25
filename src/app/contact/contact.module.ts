import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SidebarModule],
  exports: [ContactComponent],
})
export class ContactModule {}
