import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import{SelectCardComponent} from './select-card/select-card.component';
import {StoryComponent} from './story/story.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import {ReadingListComponent} from './reading-list/reading-list.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'lettura', component:SelectCardComponent},
  {path: 'storia', component:StoryComponent},
  { path: 'user-profile/:emailLogin', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'user-profile/:emailLogin/letture', component: ReadingListComponent, canActivate: [AuthGuard] },
 
 

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
