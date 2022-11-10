import { Component, Input, OnInit } from '@angular/core';
import { RewardCategories } from '../interfaces/RewardCategories';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() category: RewardCategories | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  public changeRoute() {
    
  }

}
