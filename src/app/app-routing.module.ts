import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectModule } from './project/project.module';
import { ProjectComponent } from './project/project.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect kosong ke halaman beranda
  { path: 'home', component: HomeComponent }, // Rute beranda
  { path: 'project', component: ProjectComponent }, // Rute untuk komponen proyek
  { path: 'detail', component: DetailComponent }, // Rute untuk komponen detail
  { path: 'about', component: AboutComponent }, // Rute untuk komponen tentang
  { path: 'contact', component: ContactComponent }, // Rute untuk komponen tentang
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
