import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixturesComponent } from './fixtures/fixtures/fixtures.component';

export const routes: Routes = [
  {
    path: 'team-fixtures/:id',  // The ':id' is a route parameter
    component: FixturesComponent
  }
  // add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
