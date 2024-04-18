import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from '../service/project.data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  projectList: any[] = [];
  constructor(
    private router: Router,
    private projectDataService: ProjectDataService
  ) {}
  goToHome(): void {
    this.router.navigate(['']); // Navigasi ke modul proyek
  }
  goToAbout(): void {
    this.router.navigate(['/about']); // Navigasi ke modul proyek
  }
  goToProject(): void {
    this.router.navigate(['/project']); // Navigasi ke modul proyek
  }
}
