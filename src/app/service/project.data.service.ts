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
      desc: 'Resepedia adalah proyek pertama saya di bidang UI/UX, berfokus pada desain website yang menyediakan berbagai resep masakan. Proyek ini merupakan tugas akhir dari mata kuliah Desain Pengalaman Pengguna di mana saya berhasil menciptakan antarmuka yang intuitif dan menarik. Saya menggunakan alat desain seperti Figma dan Canva untuk membuat prototipe dan desain akhir. Proyek ini mengajarkan saya banyak tentang prinsip-prinsip desain pengguna dan pentingnya feedback dalam proses desain. Hasil akhir dari proyek ini mendapat nilai A, menunjukkan kualitas dan efektivitas desain yang saya kembangkan.',
      imageUrl: '../assets/img/resepedia.png',
      color: '#BE3B20',
      tools: 'Figma, Canva, Waze',
    },
    {
      type: 'Social Media Specialist',
      title: 'Positif Cup',
      desc: 'Sebagai koordinator PDD untuk Positif Cup, saya bertanggung jawab untuk menyampaikan informasi melalui akun Instagram resmi @positifcup. Peran saya meliputi pembuatan konten, strategi media sosial, dan koordinasi tim dokumentasi untuk memastikan setiap acara terdokumentasi dengan baik dan informasi disampaikan secara efektif. Menggunakan alat seperti Photoshop dan Canva, saya mampu menciptakan konten visual yang menarik dan informatif, yang membantu meningkatkan keterlibatan dan jangkauan audiens. Proyek ini tidak hanya meningkatkan keterampilan komunikasi saya tetapi juga memperkuat kemampuan saya dalam manajemen tim dan strategi media sosial.',
      color: '#0F8135',
      imageUrl: '../assets/img/positifcup.png',
      tools: 'Photoshop, Canva',
    },
    {
      type: 'Angular Typescript',
      title: 'Onic E-sport',
      desc: 'Selama magang di Zetta Bytes Company, saya mengerjakan proyek untuk Onic E-sport, di mana saya bertanggung jawab untuk mengembangkan website admin yang memungkinkan penambahan dan pengelolaan roster pemain. Dalam proyek ini, saya menggunakan Angular dan TypeScript, serta menerapkan berbagai konsep seperti array of objects, form arrays, reactive forms, dan service injection. Selain itu, saya memastikan bahwa website ini responsif dan memiliki fitur pencarian yang efisien di komponen. Pengalaman ini mengasah kemampuan saya dalam pengembangan web dan penerapan praktik terbaik dalam pemrograman modern.',
      imageUrl: '../assets/img/onic.png',
      tools:
        'Visual Studio Code; Service Injection, Responsive Design, CRUD, Array Of Object, Array On Array Form, Translate',
    },
    {
      type: 'Social Media Specialist',
      title: 'PKKBN SI 2023',
      desc: 'Sebagai koordinator PDD untuk PKKBN SI 2023, saya bertugas untuk mengelola akun Instagram resmi dan menyampaikan informasi penting terkait acara melalui media sosial. Selain itu, saya juga bertindak sebagai dokumenter selama acara berlangsung, memastikan setiap momen penting terdokumentasi dengan baik. Menggunakan alat seperti Photoshop dan Canva, saya menciptakan konten visual yang menarik dan efektif dalam menyampaikan pesan kepada audiens. Peran ini menuntut keterampilan manajemen waktu yang baik dan kemampuan untuk bekerja di bawah tekanan, serta memperkuat keahlian saya dalam komunikasi dan koordinasi tim.',
      imageUrl: '../assets/img/pkkbn.png',
      tools: 'Photoshop, Canva',
    },
    {
      type: 'Social Media Specialist',
      title: 'Himasisfo',
      desc: 'Selama menjabat sebagai Wakil Kepala Departemen di Himasisfo, saya bertanggung jawab untuk mengelola akun Instagram resmi dan memastikan informasi terkait organisasi disampaikan dengan efektif. Proyek utama saya termasuk pengenalan pengurus kabinet baru dan berbagai kegiatan organisasi lainnya. Saya menggunakan alat seperti Photoshop dan Canva untuk menciptakan konten yang menarik dan informatif, serta mengintegrasikan desain 3D dan fotografi untuk meningkatkan kualitas visual. Pengalaman ini tidak hanya meningkatkan kemampuan saya dalam manajemen media sosial tetapi juga memperkuat keterampilan desain dan fotografi saya.',
      imageUrl: '../assets/img/himasisfo.png',
      tools: 'Photoshop, Canva; 3D Design, Photography',
    },
  ];

  private projectSubject = new BehaviorSubject<any[]>(this.projectData);
  allproject$ = this.projectSubject.asObservable();
}
