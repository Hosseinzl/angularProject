import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-points',
  templateUrl: './select-points.component.html',
  styleUrls: ['./select-points.component.css']
})
export class SelectPointsComponent implements OnInit {

  constructor() { }

  minPoint !: number;
  maxPoint !: number;

  @Output("parentSetPoints") parentSetPoints: EventEmitter<Number> = new EventEmitter();

  @Output() public points = new EventEmitter<{maxPoint: number, minPoint: number}>();
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public changePoints(max: string, min: string) {

    if (+max - +min <= 0) {
      alert("invalid input")
    } else {
      this.maxPoint = +max
      this.minPoint = +min
    }
    this.points.emit({maxPoint:this.maxPoint, minPoint :this.minPoint});
  }

}
