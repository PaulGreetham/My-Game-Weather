import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixtureListComponent } from './fixtures/fixture-list/fixture-list.component';
import { TeamFixtureComponent } from './fixtures/team-fixture/team-fixture.component';

export const routes: Routes = [
  { path: 'fixtures/:teamId', component: FixtureListComponent },
  { path: 'fixtures/:fixtureId', component: TeamFixtureComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
