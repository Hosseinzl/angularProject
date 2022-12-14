import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Reward, RewardList } from '../interfaces/RewardList';
import { RewardsListService } from '../services/rewards-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute, public rewards: RewardsListService) { }

  public rewardList$ !: Observable<RewardList>;
  public reward$ !: Observable<Reward[]> | undefined;


  public points = {maxPoint: 1000000, minPoint: 0}
  queryPar !:  string;
  queryPars !: string[];

  ngOnInit(): void {

/*   
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

      if (typeof queryPar['category'] == "object") {
        this.queryPar =  queryPar['category'][0]
      } else {
        this.queryPar =  queryPar['category']
      }
      this.filterQuery()
    })


    */

  

    this.reward$ = this.rewards.InitializeRewards()
    this.reward$ = this.rewards.getRewards()
    this.reward$ = this.rewards.fliterPoints(this.points.maxPoint, this.points.minPoint)
  
  }

  public filterQuery() {
    this.queryPars = this.queryPar.split(',')

    this.reward$ = this.rewardList$.pipe(
      map((categories) => categories.rewards.filter((reward) => this.queryPar.includes(reward.categotyId)))
    );
  }
  public setPoints(points: { maxPoint: number; minPoint: number; }) {
    this.points = points
    this.ngOnInit()
  }



}
  




