import { Injectable } from '@angular/core';
import { title } from 'process';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentationDataService {
  private documentationData: any[] = [
    {
      title: 'image1',
      imageUrl:
        'https://i.pinimg.com/564x/ef/0c/fd/ef0cfd5f08eaf08c086965ed8e335961.jpg',
      size: { width: 1024, height: 768 }, // ukuran dalam pixel
    },
    {
      title: 'image2',
      imageUrl:
        'https://i.pinimg.com/564x/b4/1c/3c/b41c3ca065b9eaa404d01b4676744ad7.jpg',
      size: { width: 800, height: 600 }, // ukuran dalam pixel
    },
    {
      title: 'image3',
      imageUrl:
        'https://i.pinimg.com/564x/3b/5f/61/3b5f61b4932062007dfe126a3a254cbf.jpg',
      size: { width: 640, height: 480 }, // ukuran dalam pixel
    },
    {
      title: 'image4',
      imageUrl:
        'https://i.pinimg.com/474x/1e/56/fe/1e56fe7d4e945dbe60441236a088c0f7.jpg',
      size: { width: 1920, height: 1080 }, // ukuran dalam pixel
    },
  ];
  getDocumentationData(): any[] {
    return this.documentationData;
  }
}
