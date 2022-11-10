import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RewardCategories } from '../interfaces/RewardCategories';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit, AfterContentChecked, AfterContentInit {

  constructor() { }

  listMode: boolean = false;
  
  ngAfterContentChecked(): void {
    console.log('check')
  }

  ngAfterContentInit(): void {
    console.log('Init')
  }

  public data$ !: Observable<RewardCategories[]> | undefined;
  
  ngOnInit(): void {
    console.log('ngOnInit')

    
    this.listMode = false;
    this.data$ = new Observable((observer) => {
      fetch('http://clubapitest.radmanict.com/api/Reward/GetAllCategories')
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          observer.next(body);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });

    
    this.data$ = this.data$.pipe(
      map((categories) => categories.filter((category) => category.predefinedCategoryType !== null))
    );
  }



  public onListMode() {
    this.listMode = true
  }

}
