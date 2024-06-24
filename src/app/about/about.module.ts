import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
// import { ProjectDataService } from '../service/project.data.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DocumentationModule } from '../documentation/documentation.module';
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, SidebarModule, DocumentationModule],
  exports: [AboutComponent],
})
export class AboutModule {}
