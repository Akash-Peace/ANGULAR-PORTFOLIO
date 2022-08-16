import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EduComponent } from './edu/edu.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
