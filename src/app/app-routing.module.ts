import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectModule } from './project/project.module';
import { ProjectComponent } from './project/project.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
