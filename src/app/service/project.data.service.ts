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
      type: 'UI/UX',
      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
      color: '#0F8135',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Angular Typescript',
      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Graphic Design',
      title: 'PKKBN SI 2023',
      desc: 'Saya sebagai koordinator PDD yaitu untu mengelola dan menyampaikan infromasi melalui instagram PPKBNSI 2023 dan juga sebagai Dokumenter saat hari h',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*2v-vAaNyzItuRiu8',
    },
    {
      type: 'Graphic Design',
      title: 'Himasisfo',
      desc: 'Jobdesc pada saat menjabat sebagai wakil kepala departemen yaitu mengelola , menyampaikan informasi melalui instagram himasisfo , dan juga project pengenalan pengurus kabinet ',
      imageUrl:
        'https://cdn.dribbble.com/userupload/12291606/file/original-80c7d0a011757d5bab1ee46b6ddb5ecc.jpg?resize=400x0',
    },
    {
      type: 'UI/UX',
      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
      imageUrl: '../assets/img/resepedia.jpg',
      color: '	#BE3B20',
    },
    {
      type: 'UI/UX',
      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
      color: '#0F8135',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Angular Typescript',
      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Graphic Design',
      title: 'PKKBN SI 2023',
      desc: 'Saya sebagai koordinator PDD yaitu untu mengelola dan menyampaikan infromasi melalui instagram PPKBNSI 2023 dan juga sebagai Dokumenter saat hari h',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*2v-vAaNyzItuRiu8',
    },
    {
      type: 'Graphic Design',
      title: 'Himasisfo',
      desc: 'Jobdesc pada saat menjabat sebagai wakil kepala departemen yaitu mengelola , menyampaikan informasi melalui instagram himasisfo , dan juga project pengenalan pengurus kabinet ',
      imageUrl:
        'https://cdn.dribbble.com/userupload/12291606/file/original-80c7d0a011757d5bab1ee46b6ddb5ecc.jpg?resize=400x0',
    },
    {
      type: 'UI/UX',
      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
      imageUrl: '../assets/img/resepedia.jpg',
      color: '	#BE3B20',
    },
    {
      type: 'UI/UX',
      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
      color: '#0F8135',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Angular Typescript',
      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Graphic Design',
      title: 'PKKBN SI 2023',
      desc: 'Saya sebagai koordinator PDD yaitu untu mengelola dan menyampaikan infromasi melalui instagram PPKBNSI 2023 dan juga sebagai Dokumenter saat hari h',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*2v-vAaNyzItuRiu8',
    },
    {
      type: 'Graphic Design',
      title: 'Himasisfo',
      desc: 'Jobdesc pada saat menjabat sebagai wakil kepala departemen yaitu mengelola , menyampaikan informasi melalui instagram himasisfo , dan juga project pengenalan pengurus kabinet ',
      imageUrl:
        'https://cdn.dribbble.com/userupload/12291606/file/original-80c7d0a011757d5bab1ee46b6ddb5ecc.jpg?resize=400x0',
    },
    {
      type: 'UI/UX',
      title: 'Resepedia',
      desc: 'ini adalah project pertama saya pada dunia UI/Ui yang bertemakan website yang menyediakan resep . ini adalah tugas akhir dari mata kuliah desain pengalaman pengguna , yang pada hasil akhirnya mendapatkan nilai A',
      imageUrl: '../assets/img/resepedia.jpg',
      color: '	#BE3B20',
    },
    {
      type: 'UI/UX',
      title: 'Aplikasi Diet',
      desc: 'Project UI/UX untuk aplikasi diet yang menyediakan fitur penghitung kalori dan jadwal diet dengan penyesuaian perhitungan kalori dan kebutuhan gizi',
      color: '#0F8135',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Angular Typescript',
      title: 'Onic E sport',
      desc: 'ini adalah projek saya semasa magang di Zetta bytes company , ini adalah website admin untuk menambahkan roaster baru dan biodata roaster  ',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDqdlywnCMX1GXSlAhWrMKdWkm54bLhEYNhj7VKpB-cg&s',
    },
    {
      type: 'Graphic Design',
      title: 'PKKBN SI 2023',
      desc: 'Saya sebagai koordinator PDD yaitu untu mengelola dan menyampaikan infromasi melalui instagram PPKBNSI 2023 dan juga sebagai Dokumenter saat hari h',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/0*2v-vAaNyzItuRiu8',
    },
    {
      type: 'Graphic Design',
      title: 'Himasisfo',
      desc: 'Jobdesc pada saat menjabat sebagai wakil kepala departemen yaitu mengelola , menyampaikan informasi melalui instagram himasisfo , dan juga project pengenalan pengurus kabinet ',
      imageUrl:
        'https://cdn.dribbble.com/userupload/12291606/file/original-80c7d0a011757d5bab1ee46b6ddb5ecc.jpg?resize=400x0',
    },
  ];

  private projectSubject = new BehaviorSubject<any[]>(this.projectData);
  allproject$ = this.projectSubject.asObservable();
}
