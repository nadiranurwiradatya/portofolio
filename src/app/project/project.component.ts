import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from '../service/project.data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  projectList: any[] = [];
  constructor(
    private router: Router,
    private projectDataService: ProjectDataService
  ) {}
  ngOnInit(): void {
    this.projectDataService.allproject$.subscribe((project) => {
      this.projectList = project;
    });
  }
}
