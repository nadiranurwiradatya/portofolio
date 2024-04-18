import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private projectData: any[] = [
    {
      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
      imageUrl: '../assets/img/resepedia.jpg',
      color: '	rgb(250, 200, 152)',
    },
    {
      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
      color: '#B2AC88',
    },
    {
      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
    },
    {
      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
    },
    {
      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
    },
    {
      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
    },
  ];

  private projectSubject = new BehaviorSubject<any[]>(this.projectData);
  allproject$ = this.projectSubject.asObservable();
}
