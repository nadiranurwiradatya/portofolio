import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private projectData: any[] = [
    {
      state: 'initial',
      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
      imageUrl:
        'https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg',
    },
    {
      state: 'initial',

      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
    },
    {
      state: 'initial',

      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
    },
    {
      state: 'initial',

      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
    },
    {
      state: 'initial',

      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
    },
    {
      state: 'initial',

      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
    },
  ];

  private projectSubject = new BehaviorSubject<any[]>(this.projectData);
  allproject$ = this.projectSubject.asObservable();
}
