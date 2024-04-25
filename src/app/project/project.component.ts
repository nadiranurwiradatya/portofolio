import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from '../service/project.data.service';
import { DetailComponent } from '../detail/detail.component';
import { MatDialog } from '@angular/material/dialog';
import AOS from 'aos';

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
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.projectDataService.allproject$.subscribe((project) => {
      this.projectList = project;
    });

    // Inisialisasi AOS
    AOS.init();
  }

  // Method untuk membuka dialog
  openDialog(project) {
    this.dialog.open(DetailComponent, {
      data: project, // Mengirim data proyek yang diklik ke dialog
    });
  }

  // Method untuk menangani event scroll
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const elementPos = this.elRef.nativeElement.offsetTop;
    const scrollPos = window.pageYOffset;

    if (scrollPos + window.innerHeight > elementPos) {
      this.elRef.nativeElement.classList.add('fade-in');
    }
  }
}
