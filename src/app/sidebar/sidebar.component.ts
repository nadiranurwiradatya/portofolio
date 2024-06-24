import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  projectList: any[] = [];
  isLightMode: boolean = false;
  constructor(private router: Router) {}
  goToHome(): void {
    this.router.navigate(['']); // Navigasi ke modul proyek
  }
  goToAbout(): void {
    this.router.navigate(['/about']); // Navigasi ke modul proyek
  }
  goToProject(): void {
    this.router.navigate(['/project']); // Navigasi ke modul proyek
  }
  goToContact(): void {
    this.router.navigate(['contact']); // Navigasi ke modul proyek
  }
  toggleMode() {
    this.isLightMode = !this.isLightMode;
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}
