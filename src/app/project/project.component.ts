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
import { isPlatformBrowser } from '@angular/common';

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
    if (isPlatformBrowser(this.platformId)) {
      // Akses ke `document` hanya terjadi jika di browser
      const element = document.querySelector('...'); // Sesuaikan dengan kebutuhanmu
      // Operasi lainnya dengan `document`
    }

    // Subscribing to project data
    this.projectDataService.allproject$.subscribe((project) => {
      this.projectList = project;
    });
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
