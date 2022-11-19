import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RewardCategories } from '../interfaces/RewardCategories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-select-categories',
  templateUrl: './select-categories.component.html',
  styleUrls: ['./select-categories.component.css']
})
export class SelectCategoriesComponent implements OnInit {

  public data$ !: Observable<RewardCategories[]> | undefined;
  @Output("parentNgOnInit") parentNgOnInit: EventEmitter<any> = new EventEmitter();
  queryPar !: string;
  firstChecked !: string;

  constructor(private route: ActivatedRoute, private router: Router, private category: CategoryService) { }

  
  ngOnInit(): void {

    this.data$ = this.category.getCategories()
    this.firstChecked = this.getQueryParams()
    
  }

  onChange(id: string) {
    
    
    this.queryPar = this.getQueryParams()
    
    this.queryPar = this.checkQuery(this.queryPar, id)


    this.router.navigate(['/rewards/list'], {
      queryParams: {
        category: [this.queryPar]
      },
      queryParamsHandling: 'merge',
    });

    this.parentNgOnInit.emit();

  }

  public getQueryParams() {

    let queryParam: string = ""

    this.route.queryParams.subscribe((queryPar) => {

      if (typeof queryPar['category'] == "object") {
        queryParam =  queryPar['category'][0]
      } else {
        queryParam =  queryPar['category']
      }
    })
    return queryParam
  }


  public checkQuery(queryPar: string, id: string) {
    if (queryPar.includes(id)) {
      queryPar = queryPar.replace(id, "")
    } else {
      queryPar = id + "," + queryPar
    }

    queryPar = queryPar.replace(",,", ",")

    return queryPar
  }

}

