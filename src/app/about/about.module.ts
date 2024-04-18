import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ProjectDataService } from '../service/project.data.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from '../sidebar/sidebar.module';
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, SidebarModule],
  exports: [AboutComponent],
})
export class AboutModule {}
