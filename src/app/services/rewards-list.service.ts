import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { Reward, RewardList } from '../interfaces/RewardList';

@Injectable({
  providedIn: 'root'
})
export class RewardsListService {

  
  public rewardList$ !: Observable<RewardList>;
  public reward$ !: Observable<Reward[]>;
  queryPar: string = "";
  queryPars !: string[];
  
  constructor(private route: ActivatedRoute) { }

  InitializeRewards() {
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

    return this.reward$

  }

  getRewards() {
    
    this.route.queryParams.subscribe((queryPar) => {

      if (typeof queryPar['category'] == "object") {
        this.queryPar =  queryPar['category'][0]
      } else {
        this.queryPar =  queryPar['category']
      }

      if (this.queryPar != "") {
        this.filterQuery()
      }

      this.filterQuery()
    })
    return this.reward$

  }

  public filterQuery() {
    this.queryPars = this.queryPar.split(',')

    this.reward$ = this.rewardList$.pipe(
      map((categories) => categories.rewards.filter((reward) => this.queryPar.includes(reward.categotyId)))
    );
  }

  fliterPoints(max:number , min: number) {

    this.reward$ = this.reward$.pipe(
      map((rewards) => rewards.filter((reward) => reward.point <= max && reward.point >= min))
    );

    return this.reward$

  }
}
