import { Injectable } from '@angular/core';
import { title } from 'process';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private projectData: any[] = [
    {
      type: 'UI/UX',
      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
      imageUrl: '../assets/img/resepedia.jpg',
      color: '	#BE3B20',
    },
    {
      type: 'Social Media Specialist',
      title: 'Positif Cup',
      desc: 'Saya di pilih menjadi koordinator PDD dan bertugas untuk menyampaikan informasi melalui instagram @positifcup dan mengkoordinasi anggota yang bertugas sebagai dokumenter',
      color: '#0F8135',
      imageUrl: '../assets/img/positifcup.png',
    },
    {
      type: 'Angular Typescript',
      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster, saya menerapkan array of object , form array , reactive form , Service Injection , Responsive Website, Search on Component , dan component component lain . ',
      imageUrl: '../assets/img/onic_project.png',
    },
    {
      type: 'Social Media Specialist',
      title: 'PKKBN SI 2023',
      desc: 'Saya sebagai koordinator PDD yaitu untu mengelola dan menyampaikan infromasi melalui instagram PPKBNSI 2023 dan juga sebagai Dokumenter saat hari h',
      imageUrl: '../assets/img/pkkbn.png',
    },
    {
      type: 'Social Media Specialist',
      title: 'Himasisfo',
      desc: 'Jobdesc pada saat menjabat sebagai wakil kepala departemen yaitu mengelola , menyampaikan informasi melalui instagram himasisfo , dan juga project pengenalan pengurus kabinet ',
      imageUrl: '../assets/img/himasisfo-project.png',
    },
  ];

  private projectSubject = new BehaviorSubject<any[]>(this.projectData);
  allproject$ = this.projectSubject.asObservable();
}
