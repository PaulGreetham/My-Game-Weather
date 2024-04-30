import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-fixtures',
  standalone: true,
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  fixtures$: Observable<any[]> = new Observable<any[]>();

  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fixtures$ = this.route.paramMap.pipe(
      switchMap(params => {
        const teamId = +params.get('id')!;
        return this.footballService.getFixtures(teamId).pipe(
          map(data => data.response)
        );
      })
    );
  }
}
