import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from '../service/project.data.service';
import { DetailComponent } from '../detail/detail.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  selectedProject: any;

  projectList: any[] = [];
  constructor(
    private router: Router,
    private projectDataService: ProjectDataService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.projectDataService.allproject$.subscribe((project) => {
      this.projectList = project;
    });
  }

  openDialog(project) {
    this.dialog.open(DetailComponent, {
      data: project, // mengirim data proyek yang diklik ke dialog
    });
  }
}
