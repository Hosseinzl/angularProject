import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Reward, RewardList } from '../interfaces/RewardList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public rewardList$ !: Observable<RewardList>;
  public reward$ !: Observable<Reward[]> | undefined;

  queryPar !:  string;

  ngOnInit(): void {

    this.rewardList$ = new Observable((observer) => {
      fetch('http://clubapitest.radmanict.com/api/Reward/GetRewardList?PageSize=50&Page=1&IsFavorite=false&Min=0')
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
        })
    })

    this.route.queryParams.subscribe((queryPar) => {
      this.queryPar =  queryPar['category']
    })

    this.reward$ = this.rewardList$.pipe(
      map((categories) => categories.rewards.filter((reward) => reward.categotyId === this.queryPar))
    );

  }

}
  




