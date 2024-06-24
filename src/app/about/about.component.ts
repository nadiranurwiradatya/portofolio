import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
// import { ProjectDataService } from '../service/project.data.service';
import { DocumentationDataService } from '../documentation/documentation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  documentationData: any[] = [];
  constructor(
    private router: Router,
    // private projectDataService: ProjectDataService,
    private documentation: DocumentationDataService
  ) {}
  ngOnInit(): void {
    this.documentationData = this.documentation.getDocumentationData();
  }
  getWidth(size: string): string {
    return size.split('x')[0] + 'px';
  }

  getHeight(size: string): string {
    return size.split('x')[1] + 'px';
  }
}
