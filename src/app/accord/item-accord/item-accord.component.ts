import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-accord',
  templateUrl: './item-accord.component.html',
  styleUrls: ['./item-accord.component.scss']
})
export class ItemAccordComponent implements OnInit {
  @Input() accord: any
  constructor() { }

  ngOnInit(): void {
  }

}
