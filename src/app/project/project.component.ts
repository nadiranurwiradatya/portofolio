import {
  Component,
  OnInit,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from '../service/project.data.service';
import { DetailComponent } from '../detail/detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  selectedProject: any;
  projectList: any[] = [];

  constructor(
    private router: Router,
    private projectDataService: ProjectDataService,
    public dialog: MatDialog,
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.projectDataService.allproject$.subscribe((project) => {
      this.projectList = project;
    });
  }

  openDialog(project) {
    this.dialog.open(DetailComponent, {
      data: project,
    });
  }
}
