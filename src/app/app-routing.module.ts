import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from '../learn/learn.component';
import { CardDetailsComponent } from '../card-details/card-details.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
  { path: 'learn', component: LearnComponent },
  { path: 'card-details', component: CardDetailsComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' }, // Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}