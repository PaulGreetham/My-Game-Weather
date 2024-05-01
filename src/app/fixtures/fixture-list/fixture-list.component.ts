import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FootballService } from '../../services/football.service';
import { Fixture } from '../../interfaces/team.interface';

@Component({
  selector: 'app-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.scss']
})
export class FixtureListComponent implements OnInit {
  fixtures$: Observable<Fixture[]> = new Observable<Fixture[]>();

  constructor(private footballService: FootballService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fixtures$ = this.route.paramMap.pipe(
      switchMap(params => {
        const teamId = +params.get('teamId')!;
        return this.footballService.getFixtures(teamId).pipe(
          map(data => data.response)
        );
      })
    );
}
}
