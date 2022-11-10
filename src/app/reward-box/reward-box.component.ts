import { Component, Input, OnInit } from '@angular/core';
import { Reward } from '../interfaces/RewardList';

@Component({
  selector: 'app-reward-box',
  templateUrl: './reward-box.component.html',
  styleUrls: ['./reward-box.component.css']
})
export class RewardBoxComponent implements OnInit {

  constructor() { }

  @Input()
  reward!: Reward;
  ngOnInit(): void {
  }

}
