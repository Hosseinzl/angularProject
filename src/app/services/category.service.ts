import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RewardCategories } from '../interfaces/RewardCategories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public data$ !: Observable<RewardCategories[]> | undefined;

  constructor() { }


  getCategories() {
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

    return this.data$
  }
}
