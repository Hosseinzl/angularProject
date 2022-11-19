import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RewardCategories } from '../interfaces/RewardCategories';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  constructor(private category: CategoryService) { }

  listMode: boolean = false;

  public data$ !: Observable<RewardCategories[]> | undefined;
  
  ngOnInit(): void {

    
    this.listMode = false;

    this.data$ = this.category.getCategories()

  }

  public onListMode() {
    this.listMode = true
  }

}
